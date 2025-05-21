# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-pagerduty.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-pagerduty.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service pagerduty_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.Service.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewService(scope Construct, id *string, config ServiceConfig) Service
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.service.Service.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.service.Service.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.service.Service.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.service.Service.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.service.Service.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.service.Service.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.service.Service.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.service.Service.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.service.Service.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlertGroupingParameters` <a name="PutAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters"></a>

```go
func PutAlertGroupingParameters(value ServiceAlertGroupingParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `PutAutoPauseNotificationsParameters` <a name="PutAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters"></a>

```go
func PutAutoPauseNotificationsParameters(value ServiceAutoPauseNotificationsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `PutIncidentUrgencyRule` <a name="PutIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule"></a>

```go
func PutIncidentUrgencyRule(value ServiceIncidentUrgencyRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `PutScheduledActions` <a name="PutScheduledActions" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions"></a>

```go
func PutScheduledActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSupportHours` <a name="PutSupportHours" id="@cdktf/provider-pagerduty.service.Service.putSupportHours"></a>

```go
func PutSupportHours(value ServiceSupportHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `ResetAcknowledgementTimeout` <a name="ResetAcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout"></a>

```go
func ResetAcknowledgementTimeout()
```

##### `ResetAlertCreation` <a name="ResetAlertCreation" id="@cdktf/provider-pagerduty.service.Service.resetAlertCreation"></a>

```go
func ResetAlertCreation()
```

##### `ResetAlertGrouping` <a name="ResetAlertGrouping" id="@cdktf/provider-pagerduty.service.Service.resetAlertGrouping"></a>

```go
func ResetAlertGrouping()
```

##### `ResetAlertGroupingParameters` <a name="ResetAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters"></a>

```go
func ResetAlertGroupingParameters()
```

##### `ResetAlertGroupingTimeout` <a name="ResetAlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout"></a>

```go
func ResetAlertGroupingTimeout()
```

##### `ResetAutoPauseNotificationsParameters` <a name="ResetAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters"></a>

```go
func ResetAutoPauseNotificationsParameters()
```

##### `ResetAutoResolveTimeout` <a name="ResetAutoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout"></a>

```go
func ResetAutoResolveTimeout()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.service.Service.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.service.Service.resetId"></a>

```go
func ResetId()
```

##### `ResetIncidentUrgencyRule` <a name="ResetIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule"></a>

```go
func ResetIncidentUrgencyRule()
```

##### `ResetResponsePlay` <a name="ResetResponsePlay" id="@cdktf/provider-pagerduty.service.Service.resetResponsePlay"></a>

```go
func ResetResponsePlay()
```

##### `ResetScheduledActions` <a name="ResetScheduledActions" id="@cdktf/provider-pagerduty.service.Service.resetScheduledActions"></a>

```go
func ResetScheduledActions()
```

##### `ResetSupportHours` <a name="ResetSupportHours" id="@cdktf/provider-pagerduty.service.Service.resetSupportHours"></a>

```go
func ResetSupportHours()
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

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.Service_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.Service_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.Service_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.Service_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters">AlertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters">AutoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule">IncidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp">LastIncidentTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActions">ScheduledActions</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHours">SupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput">AcknowledgementTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreationInput">AlertCreationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput">AlertGroupingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput">AlertGroupingParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput">AlertGroupingTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput">AutoPauseNotificationsParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput">AutoResolveTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput">EscalationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput">IncidentUrgencyRuleInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlayInput">ResponsePlayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput">ScheduledActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHoursInput">SupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout">AcknowledgementTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreation">AlertCreation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGrouping">AlertGrouping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout">AlertGroupingTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout">AutoResolveTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicy">EscalationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlay">ResponsePlay</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.service.Service.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.service.Service.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.Service.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.service.Service.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.service.Service.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.service.Service.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.service.Service.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.service.Service.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.service.Service.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.service.Service.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.service.Service.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlertGroupingParameters`<sup>Required</sup> <a name="AlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters"></a>

```go
func AlertGroupingParameters() ServiceAlertGroupingParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a>

---

##### `AutoPauseNotificationsParameters`<sup>Required</sup> <a name="AutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters"></a>

```go
func AutoPauseNotificationsParameters() ServiceAutoPauseNotificationsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-pagerduty.service.Service.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.service.Service.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `IncidentUrgencyRule`<sup>Required</sup> <a name="IncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule"></a>

```go
func IncidentUrgencyRule() ServiceIncidentUrgencyRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a>

---

##### `LastIncidentTimestamp`<sup>Required</sup> <a name="LastIncidentTimestamp" id="@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp"></a>

```go
func LastIncidentTimestamp() *string
```

- *Type:* *string

---

##### `ScheduledActions`<sup>Required</sup> <a name="ScheduledActions" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActions"></a>

```go
func ScheduledActions() ServiceScheduledActionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-pagerduty.service.Service.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportHours`<sup>Required</sup> <a name="SupportHours" id="@cdktf/provider-pagerduty.service.Service.property.supportHours"></a>

```go
func SupportHours() ServiceSupportHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.Service.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AcknowledgementTimeoutInput`<sup>Optional</sup> <a name="AcknowledgementTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput"></a>

```go
func AcknowledgementTimeoutInput() *string
```

- *Type:* *string

---

##### `AlertCreationInput`<sup>Optional</sup> <a name="AlertCreationInput" id="@cdktf/provider-pagerduty.service.Service.property.alertCreationInput"></a>

```go
func AlertCreationInput() *string
```

- *Type:* *string

---

##### `AlertGroupingInput`<sup>Optional</sup> <a name="AlertGroupingInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput"></a>

```go
func AlertGroupingInput() *string
```

- *Type:* *string

---

##### `AlertGroupingParametersInput`<sup>Optional</sup> <a name="AlertGroupingParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput"></a>

```go
func AlertGroupingParametersInput() ServiceAlertGroupingParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `AlertGroupingTimeoutInput`<sup>Optional</sup> <a name="AlertGroupingTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput"></a>

```go
func AlertGroupingTimeoutInput() *string
```

- *Type:* *string

---

##### `AutoPauseNotificationsParametersInput`<sup>Optional</sup> <a name="AutoPauseNotificationsParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput"></a>

```go
func AutoPauseNotificationsParametersInput() ServiceAutoPauseNotificationsParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `AutoResolveTimeoutInput`<sup>Optional</sup> <a name="AutoResolveTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput"></a>

```go
func AutoResolveTimeoutInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.service.Service.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EscalationPolicyInput`<sup>Optional</sup> <a name="EscalationPolicyInput" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput"></a>

```go
func EscalationPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.service.Service.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncidentUrgencyRuleInput`<sup>Optional</sup> <a name="IncidentUrgencyRuleInput" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput"></a>

```go
func IncidentUrgencyRuleInput() ServiceIncidentUrgencyRule
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.service.Service.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResponsePlayInput`<sup>Optional</sup> <a name="ResponsePlayInput" id="@cdktf/provider-pagerduty.service.Service.property.responsePlayInput"></a>

```go
func ResponsePlayInput() *string
```

- *Type:* *string

---

##### `ScheduledActionsInput`<sup>Optional</sup> <a name="ScheduledActionsInput" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput"></a>

```go
func ScheduledActionsInput() interface{}
```

- *Type:* interface{}

---

##### `SupportHoursInput`<sup>Optional</sup> <a name="SupportHoursInput" id="@cdktf/provider-pagerduty.service.Service.property.supportHoursInput"></a>

```go
func SupportHoursInput() ServiceSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `AcknowledgementTimeout`<sup>Required</sup> <a name="AcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout"></a>

```go
func AcknowledgementTimeout() *string
```

- *Type:* *string

---

##### `AlertCreation`<sup>Required</sup> <a name="AlertCreation" id="@cdktf/provider-pagerduty.service.Service.property.alertCreation"></a>

```go
func AlertCreation() *string
```

- *Type:* *string

---

##### `AlertGrouping`<sup>Required</sup> <a name="AlertGrouping" id="@cdktf/provider-pagerduty.service.Service.property.alertGrouping"></a>

```go
func AlertGrouping() *string
```

- *Type:* *string

---

##### `AlertGroupingTimeout`<sup>Required</sup> <a name="AlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout"></a>

```go
func AlertGroupingTimeout() *string
```

- *Type:* *string

---

##### `AutoResolveTimeout`<sup>Required</sup> <a name="AutoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout"></a>

```go
func AutoResolveTimeout() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.service.Service.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicy"></a>

```go
func EscalationPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.Service.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.Service.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResponsePlay`<sup>Required</sup> <a name="ResponsePlay" id="@cdktf/provider-pagerduty.service.Service.property.responsePlay"></a>

```go
func ResponsePlay() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.service.Service.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAlertGroupingParameters <a name="ServiceAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceAlertGroupingParameters {
	Config: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceAlertGroupingParametersConfig,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config"></a>

```go
Config ServiceAlertGroupingParametersConfig
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#config Service#config}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

### ServiceAlertGroupingParametersConfig <a name="ServiceAlertGroupingParametersConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceAlertGroupingParametersConfig {
	Aggregate: *string,
	Fields: *[]*string,
	Timeout: *f64,
	TimeWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate">Aggregate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#aggregate Service#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#fields Service#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#timeout Service#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow">TimeWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#time_window Service#time_window}. |

---

##### `Aggregate`<sup>Optional</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate"></a>

```go
Aggregate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#aggregate Service#aggregate}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#fields Service#fields}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#timeout Service#timeout}.

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow"></a>

```go
TimeWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#time_window Service#time_window}.

---

### ServiceAutoPauseNotificationsParameters <a name="ServiceAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceAutoPauseNotificationsParameters {
	Enabled: interface{},
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#enabled Service#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#timeout Service#timeout}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#enabled Service#enabled}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#timeout Service#timeout}.

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-pagerduty.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EscalationPolicy: *string,
	Name: *string,
	AcknowledgementTimeout: *string,
	AlertCreation: *string,
	AlertGrouping: *string,
	AlertGroupingParameters: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceAlertGroupingParameters,
	AlertGroupingTimeout: *string,
	AutoPauseNotificationsParameters: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceAutoPauseNotificationsParameters,
	AutoResolveTimeout: *string,
	Description: *string,
	Id: *string,
	IncidentUrgencyRule: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceIncidentUrgencyRule,
	ResponsePlay: *string,
	ScheduledActions: interface{},
	SupportHours: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceSupportHours,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy">EscalationPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout">AcknowledgementTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation">AlertCreation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping">AlertGrouping</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters">AlertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout">AlertGroupingTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters">AutoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout">AutoResolveTimeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule">IncidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay">ResponsePlay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions">ScheduledActions</a></code> | <code>interface{}</code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours">SupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy"></a>

```go
EscalationPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#name Service#name}.

---

##### `AcknowledgementTimeout`<sup>Optional</sup> <a name="AcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout"></a>

```go
AcknowledgementTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `AlertCreation`<sup>Optional</sup> <a name="AlertCreation" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation"></a>

```go
AlertCreation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `AlertGrouping`<sup>Optional</sup> <a name="AlertGrouping" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping"></a>

```go
AlertGrouping *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `AlertGroupingParameters`<sup>Optional</sup> <a name="AlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters"></a>

```go
AlertGroupingParameters ServiceAlertGroupingParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `AlertGroupingTimeout`<sup>Optional</sup> <a name="AlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout"></a>

```go
AlertGroupingTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `AutoPauseNotificationsParameters`<sup>Optional</sup> <a name="AutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters"></a>

```go
AutoPauseNotificationsParameters ServiceAutoPauseNotificationsParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `AutoResolveTimeout`<sup>Optional</sup> <a name="AutoResolveTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout"></a>

```go
AutoResolveTimeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#description Service#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncidentUrgencyRule`<sup>Optional</sup> <a name="IncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule"></a>

```go
IncidentUrgencyRule ServiceIncidentUrgencyRule
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `ResponsePlay`<sup>Optional</sup> <a name="ResponsePlay" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay"></a>

```go
ResponsePlay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#response_play Service#response_play}.

---

##### `ScheduledActions`<sup>Optional</sup> <a name="ScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions"></a>

```go
ScheduledActions interface{}
```

- *Type:* interface{}

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `SupportHours`<sup>Optional</sup> <a name="SupportHours" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours"></a>

```go
SupportHours ServiceSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#support_hours Service#support_hours}

---

### ServiceIncidentUrgencyRule <a name="ServiceIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceIncidentUrgencyRule {
	Type: *string,
	DuringSupportHours: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceIncidentUrgencyRuleDuringSupportHours,
	OutsideSupportHours: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.service.ServiceIncidentUrgencyRuleOutsideSupportHours,
	Urgency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours">DuringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | during_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours">OutsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | outside_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency">Urgency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#urgency Service#urgency}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

##### `DuringSupportHours`<sup>Optional</sup> <a name="DuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours"></a>

```go
DuringSupportHours ServiceIncidentUrgencyRuleDuringSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

during_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#during_support_hours Service#during_support_hours}

---

##### `OutsideSupportHours`<sup>Optional</sup> <a name="OutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours"></a>

```go
OutsideSupportHours ServiceIncidentUrgencyRuleOutsideSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

outside_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#outside_support_hours Service#outside_support_hours}

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency"></a>

```go
Urgency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleDuringSupportHours <a name="ServiceIncidentUrgencyRuleDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceIncidentUrgencyRuleDuringSupportHours {
	Type: *string,
	Urgency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency">Urgency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#urgency Service#urgency}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency"></a>

```go
Urgency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleOutsideSupportHours <a name="ServiceIncidentUrgencyRuleOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceIncidentUrgencyRuleOutsideSupportHours {
	Type: *string,
	Urgency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency">Urgency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#urgency Service#urgency}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency"></a>

```go
Urgency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#urgency Service#urgency}.

---

### ServiceScheduledActions <a name="ServiceScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceScheduledActions {
	At: interface{},
	ToUrgency: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at">At</a></code> | <code>interface{}</code> | at block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency">ToUrgency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#to_urgency Service#to_urgency}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |

---

##### `At`<sup>Optional</sup> <a name="At" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at"></a>

```go
At interface{}
```

- *Type:* interface{}

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#at Service#at}

---

##### `ToUrgency`<sup>Optional</sup> <a name="ToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency"></a>

```go
ToUrgency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#to_urgency Service#to_urgency}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

### ServiceScheduledActionsAt <a name="ServiceScheduledActionsAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceScheduledActionsAt {
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#name Service#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

### ServiceSupportHours <a name="ServiceSupportHours" id="@cdktf/provider-pagerduty.service.ServiceSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

&service.ServiceSupportHours {
	DaysOfWeek: *[]*f64,
	EndTime: *string,
	StartTime: *string,
	TimeZone: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#days_of_week Service#days_of_week}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#end_time Service#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#start_time Service#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#time_zone Service#time_zone}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}. |

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#days_of_week Service#days_of_week}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#end_time Service#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#start_time Service#start_time}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#time_zone Service#time_zone}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service#type Service#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAlertGroupingParametersConfigOutputReference <a name="ServiceAlertGroupingParametersConfigOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceAlertGroupingParametersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceAlertGroupingParametersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregate` <a name="ResetAggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate"></a>

```go
func ResetAggregate()
```

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow"></a>

```go
func ResetTimeWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput">AggregateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate">Aggregate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow">TimeWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregateInput`<sup>Optional</sup> <a name="AggregateInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput"></a>

```go
func AggregateInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() *f64
```

- *Type:* *f64

---

##### `Aggregate`<sup>Required</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate"></a>

```go
func Aggregate() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow"></a>

```go
func TimeWindow() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceAlertGroupingParametersConfig
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---


### ServiceAlertGroupingParametersOutputReference <a name="ServiceAlertGroupingParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceAlertGroupingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceAlertGroupingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig"></a>

```go
func PutConfig(value ServiceAlertGroupingParametersConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config"></a>

```go
func Config() ServiceAlertGroupingParametersConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput"></a>

```go
func ConfigInput() ServiceAlertGroupingParametersConfig
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceAlertGroupingParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---


### ServiceAutoPauseNotificationsParametersOutputReference <a name="ServiceAutoPauseNotificationsParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceAutoPauseNotificationsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceAutoPauseNotificationsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceAutoPauseNotificationsParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---


### ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency"></a>

```go
func ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency">Urgency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput"></a>

```go
func UrgencyInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency"></a>

```go
func Urgency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceIncidentUrgencyRuleDuringSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---


### ServiceIncidentUrgencyRuleOutputReference <a name="ServiceIncidentUrgencyRuleOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceIncidentUrgencyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceIncidentUrgencyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDuringSupportHours` <a name="PutDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours"></a>

```go
func PutDuringSupportHours(value ServiceIncidentUrgencyRuleDuringSupportHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `PutOutsideSupportHours` <a name="PutOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours"></a>

```go
func PutOutsideSupportHours(value ServiceIncidentUrgencyRuleOutsideSupportHours)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `ResetDuringSupportHours` <a name="ResetDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours"></a>

```go
func ResetDuringSupportHours()
```

##### `ResetOutsideSupportHours` <a name="ResetOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours"></a>

```go
func ResetOutsideSupportHours()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency"></a>

```go
func ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours">DuringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours">OutsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput">DuringSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput">OutsideSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency">Urgency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DuringSupportHours`<sup>Required</sup> <a name="DuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours"></a>

```go
func DuringSupportHours() ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a>

---

##### `OutsideSupportHours`<sup>Required</sup> <a name="OutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours"></a>

```go
func OutsideSupportHours() ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a>

---

##### `DuringSupportHoursInput`<sup>Optional</sup> <a name="DuringSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput"></a>

```go
func DuringSupportHoursInput() ServiceIncidentUrgencyRuleDuringSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `OutsideSupportHoursInput`<sup>Optional</sup> <a name="OutsideSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput"></a>

```go
func OutsideSupportHoursInput() ServiceIncidentUrgencyRuleOutsideSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput"></a>

```go
func UrgencyInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency"></a>

```go
func Urgency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceIncidentUrgencyRule
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---


### ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency"></a>

```go
func ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency">Urgency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput"></a>

```go
func UrgencyInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency"></a>

```go
func Urgency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceIncidentUrgencyRuleOutsideSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---


### ServiceScheduledActionsAtList <a name="ServiceScheduledActionsAtList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceScheduledActionsAtList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceScheduledActionsAtList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get"></a>

```go
func Get(index *f64) ServiceScheduledActionsAtOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceScheduledActionsAtOutputReference <a name="ServiceScheduledActionsAtOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceScheduledActionsAtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceScheduledActionsAtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceScheduledActionsList <a name="ServiceScheduledActionsList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceScheduledActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceScheduledActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get"></a>

```go
func Get(index *f64) ServiceScheduledActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceScheduledActionsOutputReference <a name="ServiceScheduledActionsOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceScheduledActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceScheduledActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAt` <a name="PutAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt"></a>

```go
func PutAt(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAt` <a name="ResetAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt"></a>

```go
func ResetAt()
```

##### `ResetToUrgency` <a name="ResetToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency"></a>

```go
func ResetToUrgency()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at">At</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput">AtInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput">ToUrgencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency">ToUrgency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `At`<sup>Required</sup> <a name="At" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at"></a>

```go
func At() ServiceScheduledActionsAtList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a>

---

##### `AtInput`<sup>Optional</sup> <a name="AtInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput"></a>

```go
func AtInput() interface{}
```

- *Type:* interface{}

---

##### `ToUrgencyInput`<sup>Optional</sup> <a name="ToUrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput"></a>

```go
func ToUrgencyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ToUrgency`<sup>Required</sup> <a name="ToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency"></a>

```go
func ToUrgency() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceSupportHoursOutputReference <a name="ServiceSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/service"

service.NewServiceSupportHoursOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceSupportHoursOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*f64
```

- *Type:* *[]*f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---



