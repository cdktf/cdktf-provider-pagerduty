# `automationActionsAction` Submodule <a name="`automationActionsAction` Submodule" id="@cdktf/provider-pagerduty.automationActionsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsAction <a name="AutomationActionsAction" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action pagerduty_automation_actions_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

automationactionsaction.NewAutomationActionsAction(scope Construct, id *string, config AutomationActionsActionConfig) AutomationActionsAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig">AutomationActionsActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig">AutomationActionsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference">PutActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification">ResetActionClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationFromEventOrchestration">ResetAllowInvocationFromEventOrchestration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationManually">ResetAllowInvocationManually</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetMapToAllServices">ResetMapToAllServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime">ResetModifyTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOnlyInvocableOnUnresolvedIncidents">ResetOnlyInvocableOnUnresolvedIncidents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId">ResetRunnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType">ResetRunnerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionDataReference` <a name="PutActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference"></a>

```go
func PutActionDataReference(value AutomationActionsActionActionDataReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `ResetActionClassification` <a name="ResetActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification"></a>

```go
func ResetActionClassification()
```

##### `ResetAllowInvocationFromEventOrchestration` <a name="ResetAllowInvocationFromEventOrchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationFromEventOrchestration"></a>

```go
func ResetAllowInvocationFromEventOrchestration()
```

##### `ResetAllowInvocationManually` <a name="ResetAllowInvocationManually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationManually"></a>

```go
func ResetAllowInvocationManually()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId"></a>

```go
func ResetId()
```

##### `ResetMapToAllServices` <a name="ResetMapToAllServices" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetMapToAllServices"></a>

```go
func ResetMapToAllServices()
```

##### `ResetModifyTime` <a name="ResetModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime"></a>

```go
func ResetModifyTime()
```

##### `ResetOnlyInvocableOnUnresolvedIncidents` <a name="ResetOnlyInvocableOnUnresolvedIncidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOnlyInvocableOnUnresolvedIncidents"></a>

```go
func ResetOnlyInvocableOnUnresolvedIncidents()
```

##### `ResetRunnerId` <a name="ResetRunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId"></a>

```go
func ResetRunnerId()
```

##### `ResetRunnerType` <a name="ResetRunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType"></a>

```go
func ResetRunnerType()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationActionsAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

automationactionsaction.AutomationActionsAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

automationactionsaction.AutomationActionsAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

automationactionsaction.AutomationActionsAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

automationactionsaction.AutomationActionsAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationActionsAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationActionsAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationActionsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationActionsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference">ActionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput">ActionClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput">ActionDataReferenceInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput">ActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestrationInput">AllowInvocationFromEventOrchestrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManuallyInput">AllowInvocationManuallyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput">CreationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServicesInput">MapToAllServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput">ModifyTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidentsInput">OnlyInvocableOnUnresolvedIncidentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput">RunnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput">RunnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification">ActionClassification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestration">AllowInvocationFromEventOrchestration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManually">AllowInvocationManually</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServices">MapToAllServices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime">ModifyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidents">OnlyInvocableOnUnresolvedIncidents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId">RunnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType">RunnerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionDataReference`<sup>Required</sup> <a name="ActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference"></a>

```go
func ActionDataReference() AutomationActionsActionActionDataReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a>

---

##### `ActionClassificationInput`<sup>Optional</sup> <a name="ActionClassificationInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput"></a>

```go
func ActionClassificationInput() *string
```

- *Type:* *string

---

##### `ActionDataReferenceInput`<sup>Optional</sup> <a name="ActionDataReferenceInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput"></a>

```go
func ActionDataReferenceInput() AutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput"></a>

```go
func ActionTypeInput() *string
```

- *Type:* *string

---

##### `AllowInvocationFromEventOrchestrationInput`<sup>Optional</sup> <a name="AllowInvocationFromEventOrchestrationInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestrationInput"></a>

```go
func AllowInvocationFromEventOrchestrationInput() *string
```

- *Type:* *string

---

##### `AllowInvocationManuallyInput`<sup>Optional</sup> <a name="AllowInvocationManuallyInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManuallyInput"></a>

```go
func AllowInvocationManuallyInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput"></a>

```go
func CreationTimeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MapToAllServicesInput`<sup>Optional</sup> <a name="MapToAllServicesInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServicesInput"></a>

```go
func MapToAllServicesInput() interface{}
```

- *Type:* interface{}

---

##### `ModifyTimeInput`<sup>Optional</sup> <a name="ModifyTimeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput"></a>

```go
func ModifyTimeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnlyInvocableOnUnresolvedIncidentsInput`<sup>Optional</sup> <a name="OnlyInvocableOnUnresolvedIncidentsInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidentsInput"></a>

```go
func OnlyInvocableOnUnresolvedIncidentsInput() interface{}
```

- *Type:* interface{}

---

##### `RunnerIdInput`<sup>Optional</sup> <a name="RunnerIdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput"></a>

```go
func RunnerIdInput() *string
```

- *Type:* *string

---

##### `RunnerTypeInput`<sup>Optional</sup> <a name="RunnerTypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput"></a>

```go
func RunnerTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ActionClassification`<sup>Required</sup> <a name="ActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification"></a>

```go
func ActionClassification() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `AllowInvocationFromEventOrchestration`<sup>Required</sup> <a name="AllowInvocationFromEventOrchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestration"></a>

```go
func AllowInvocationFromEventOrchestration() *string
```

- *Type:* *string

---

##### `AllowInvocationManually`<sup>Required</sup> <a name="AllowInvocationManually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManually"></a>

```go
func AllowInvocationManually() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MapToAllServices`<sup>Required</sup> <a name="MapToAllServices" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServices"></a>

```go
func MapToAllServices() interface{}
```

- *Type:* interface{}

---

##### `ModifyTime`<sup>Required</sup> <a name="ModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime"></a>

```go
func ModifyTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnlyInvocableOnUnresolvedIncidents`<sup>Required</sup> <a name="OnlyInvocableOnUnresolvedIncidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidents"></a>

```go
func OnlyInvocableOnUnresolvedIncidents() interface{}
```

- *Type:* interface{}

---

##### `RunnerId`<sup>Required</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId"></a>

```go
func RunnerId() *string
```

- *Type:* *string

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType"></a>

```go
func RunnerType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsActionActionDataReference <a name="AutomationActionsActionActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

&automationactionsaction.AutomationActionsActionActionDataReference {
	InvocationCommand: *string,
	ProcessAutomationJobArguments: *string,
	ProcessAutomationJobId: *string,
	ProcessAutomationNodeFilter: *string,
	Script: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand">InvocationCommand</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments">ProcessAutomationJobArguments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId">ProcessAutomationJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter">ProcessAutomationNodeFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script">Script</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#script AutomationActionsAction#script}. |

---

##### `InvocationCommand`<sup>Optional</sup> <a name="InvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand"></a>

```go
InvocationCommand *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}.

---

##### `ProcessAutomationJobArguments`<sup>Optional</sup> <a name="ProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments"></a>

```go
ProcessAutomationJobArguments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}.

---

##### `ProcessAutomationJobId`<sup>Optional</sup> <a name="ProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId"></a>

```go
ProcessAutomationJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}.

---

##### `ProcessAutomationNodeFilter`<sup>Optional</sup> <a name="ProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter"></a>

```go
ProcessAutomationNodeFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script"></a>

```go
Script *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#script AutomationActionsAction#script}.

---

### AutomationActionsActionConfig <a name="AutomationActionsActionConfig" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

&automationactionsaction.AutomationActionsActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionDataReference: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14.automationActionsAction.AutomationActionsActionActionDataReference,
	ActionType: *string,
	Name: *string,
	ActionClassification: *string,
	AllowInvocationFromEventOrchestration: *string,
	AllowInvocationManually: *string,
	CreationTime: *string,
	Description: *string,
	Id: *string,
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
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference">ActionDataReference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | action_data_reference block. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType">ActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#name AutomationActionsAction#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification">ActionClassification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationFromEventOrchestration">AllowInvocationFromEventOrchestration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#allow_invocation_from_event_orchestration AutomationActionsAction#allow_invocation_from_event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationManually">AllowInvocationManually</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#allow_invocation_manually AutomationActionsAction#allow_invocation_manually}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime">CreationTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#description AutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#id AutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.mapToAllServices">MapToAllServices</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#map_to_all_services AutomationActionsAction#map_to_all_services}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime">ModifyTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.onlyInvocableOnUnresolvedIncidents">OnlyInvocableOnUnresolvedIncidents</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#only_invocable_on_unresolved_incidents AutomationActionsAction#only_invocable_on_unresolved_incidents}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId">RunnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType">RunnerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#type AutomationActionsAction#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionDataReference`<sup>Required</sup> <a name="ActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference"></a>

```go
ActionDataReference AutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

action_data_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#action_data_reference AutomationActionsAction#action_data_reference}

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType"></a>

```go
ActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#name AutomationActionsAction#name}.

---

##### `ActionClassification`<sup>Optional</sup> <a name="ActionClassification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification"></a>

```go
ActionClassification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}.

---

##### `AllowInvocationFromEventOrchestration`<sup>Optional</sup> <a name="AllowInvocationFromEventOrchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationFromEventOrchestration"></a>

```go
AllowInvocationFromEventOrchestration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#allow_invocation_from_event_orchestration AutomationActionsAction#allow_invocation_from_event_orchestration}.

---

##### `AllowInvocationManually`<sup>Optional</sup> <a name="AllowInvocationManually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationManually"></a>

```go
AllowInvocationManually *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#allow_invocation_manually AutomationActionsAction#allow_invocation_manually}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime"></a>

```go
CreationTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#description AutomationActionsAction#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#id AutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MapToAllServices`<sup>Optional</sup> <a name="MapToAllServices" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.mapToAllServices"></a>

```go
MapToAllServices interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#map_to_all_services AutomationActionsAction#map_to_all_services}.

---

##### `ModifyTime`<sup>Optional</sup> <a name="ModifyTime" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime"></a>

```go
ModifyTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}.

---

##### `OnlyInvocableOnUnresolvedIncidents`<sup>Optional</sup> <a name="OnlyInvocableOnUnresolvedIncidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.onlyInvocableOnUnresolvedIncidents"></a>

```go
OnlyInvocableOnUnresolvedIncidents interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#only_invocable_on_unresolved_incidents AutomationActionsAction#only_invocable_on_unresolved_incidents}.

---

##### `RunnerId`<sup>Optional</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId"></a>

```go
RunnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}.

---

##### `RunnerType`<sup>Optional</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType"></a>

```go
RunnerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/automation_actions_action#type AutomationActionsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationActionsActionActionDataReferenceOutputReference <a name="AutomationActionsActionActionDataReferenceOutputReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/automationactionsaction"

automationactionsaction.NewAutomationActionsActionActionDataReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutomationActionsActionActionDataReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvocationCommand` <a name="ResetInvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand"></a>

```go
func ResetInvocationCommand()
```

##### `ResetProcessAutomationJobArguments` <a name="ResetProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments"></a>

```go
func ResetProcessAutomationJobArguments()
```

##### `ResetProcessAutomationJobId` <a name="ResetProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId"></a>

```go
func ResetProcessAutomationJobId()
```

##### `ResetProcessAutomationNodeFilter` <a name="ResetProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter"></a>

```go
func ResetProcessAutomationNodeFilter()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript"></a>

```go
func ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput">InvocationCommandInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput">ProcessAutomationJobArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput">ProcessAutomationJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput">ProcessAutomationNodeFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput">ScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand">InvocationCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments">ProcessAutomationJobArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId">ProcessAutomationJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter">ProcessAutomationNodeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationCommandInput`<sup>Optional</sup> <a name="InvocationCommandInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput"></a>

```go
func InvocationCommandInput() *string
```

- *Type:* *string

---

##### `ProcessAutomationJobArgumentsInput`<sup>Optional</sup> <a name="ProcessAutomationJobArgumentsInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput"></a>

```go
func ProcessAutomationJobArgumentsInput() *string
```

- *Type:* *string

---

##### `ProcessAutomationJobIdInput`<sup>Optional</sup> <a name="ProcessAutomationJobIdInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput"></a>

```go
func ProcessAutomationJobIdInput() *string
```

- *Type:* *string

---

##### `ProcessAutomationNodeFilterInput`<sup>Optional</sup> <a name="ProcessAutomationNodeFilterInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput"></a>

```go
func ProcessAutomationNodeFilterInput() *string
```

- *Type:* *string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput"></a>

```go
func ScriptInput() *string
```

- *Type:* *string

---

##### `InvocationCommand`<sup>Required</sup> <a name="InvocationCommand" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand"></a>

```go
func InvocationCommand() *string
```

- *Type:* *string

---

##### `ProcessAutomationJobArguments`<sup>Required</sup> <a name="ProcessAutomationJobArguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments"></a>

```go
func ProcessAutomationJobArguments() *string
```

- *Type:* *string

---

##### `ProcessAutomationJobId`<sup>Required</sup> <a name="ProcessAutomationJobId" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId"></a>

```go
func ProcessAutomationJobId() *string
```

- *Type:* *string

---

##### `ProcessAutomationNodeFilter`<sup>Required</sup> <a name="ProcessAutomationNodeFilter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter"></a>

```go
func ProcessAutomationNodeFilter() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() AutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---



