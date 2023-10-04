# `pagerduty_service_event_rule`

Refer to the Terraform Registory for docs: [`pagerduty_service_event_rule`](https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule).

# `serviceEventRule` Submodule <a name="`serviceEventRule` Submodule" id="@cdktf/provider-pagerduty.serviceEventRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceEventRule <a name="ServiceEventRule" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule pagerduty_service_event_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRule(scope Construct, id *string, config ServiceEventRuleConfig) ServiceEventRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig">ServiceEventRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig">ServiceEventRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putTimeFrame">PutTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetTimeFrame">ResetTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putActions"></a>

```go
func PutActions(value ServiceEventRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putConditions"></a>

```go
func PutConditions(value ServiceEventRuleConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a>

---

##### `PutTimeFrame` <a name="PutTimeFrame" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putTimeFrame"></a>

```go
func PutTimeFrame(value ServiceEventRuleTimeFrame)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putTimeFrame.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a>

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putVariable"></a>

```go
func PutVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.putVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetActions"></a>

```go
func ResetActions()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTimeFrame` <a name="ResetTimeFrame" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetTimeFrame"></a>

```go
func ResetTimeFrame()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.resetVariable"></a>

```go
func ResetVariable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.ServiceEventRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.ServiceEventRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.ServiceEventRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference">ServiceEventRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference">ServiceEventRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.timeFrame">TimeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference">ServiceEventRuleTimeFrameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList">ServiceEventRuleVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.timeFrameInput">TimeFrameInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.variableInput">VariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.actions"></a>

```go
func Actions() ServiceEventRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference">ServiceEventRuleActionsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.conditions"></a>

```go
func Conditions() ServiceEventRuleConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference">ServiceEventRuleConditionsOutputReference</a>

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.timeFrame"></a>

```go
func TimeFrame() ServiceEventRuleTimeFrameOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference">ServiceEventRuleTimeFrameOutputReference</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.variable"></a>

```go
func Variable() ServiceEventRuleVariableList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList">ServiceEventRuleVariableList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.actionsInput"></a>

```go
func ActionsInput() ServiceEventRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.conditionsInput"></a>

```go
func ConditionsInput() ServiceEventRuleConditions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeFrameInput`<sup>Optional</sup> <a name="TimeFrameInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.timeFrameInput"></a>

```go
func TimeFrameInput() ServiceEventRuleTimeFrame
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a>

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.variableInput"></a>

```go
func VariableInput() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceEventRuleActions <a name="ServiceEventRuleActions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActions {
	Annotate: interface{},
	EventAction: interface{},
	Extractions: interface{},
	Priority: interface{},
	Severity: interface{},
	Suppress: interface{},
	Suspend: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.annotate">Annotate</a></code> | <code>interface{}</code> | annotate block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.eventAction">EventAction</a></code> | <code>interface{}</code> | event_action block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.extractions">Extractions</a></code> | <code>interface{}</code> | extractions block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.priority">Priority</a></code> | <code>interface{}</code> | priority block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.severity">Severity</a></code> | <code>interface{}</code> | severity block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.suppress">Suppress</a></code> | <code>interface{}</code> | suppress block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.suspend">Suspend</a></code> | <code>interface{}</code> | suspend block. |

---

##### `Annotate`<sup>Optional</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.annotate"></a>

```go
Annotate interface{}
```

- *Type:* interface{}

annotate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#annotate ServiceEventRule#annotate}

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.eventAction"></a>

```go
EventAction interface{}
```

- *Type:* interface{}

event_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#event_action ServiceEventRule#event_action}

---

##### `Extractions`<sup>Optional</sup> <a name="Extractions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.extractions"></a>

```go
Extractions interface{}
```

- *Type:* interface{}

extractions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#extractions ServiceEventRule#extractions}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.priority"></a>

```go
Priority interface{}
```

- *Type:* interface{}

priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#priority ServiceEventRule#priority}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.severity"></a>

```go
Severity interface{}
```

- *Type:* interface{}

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#severity ServiceEventRule#severity}

---

##### `Suppress`<sup>Optional</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.suppress"></a>

```go
Suppress interface{}
```

- *Type:* interface{}

suppress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#suppress ServiceEventRule#suppress}

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions.property.suspend"></a>

```go
Suspend interface{}
```

- *Type:* interface{}

suspend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#suspend ServiceEventRule#suspend}

---

### ServiceEventRuleActionsAnnotate <a name="ServiceEventRuleActionsAnnotate" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsAnnotate {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotate.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotate.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsEventAction <a name="ServiceEventRuleActionsEventAction" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsEventAction {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventAction.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventAction.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsExtractions <a name="ServiceEventRuleActionsExtractions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsExtractions {
	Regex: *string,
	Source: *string,
	Target: *string,
	Template: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#regex ServiceEventRule#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#source ServiceEventRule#source}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#target ServiceEventRule#target}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#template ServiceEventRule#template}. |

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#regex ServiceEventRule#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#source ServiceEventRule#source}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#target ServiceEventRule#target}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractions.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#template ServiceEventRule#template}.

---

### ServiceEventRuleActionsPriority <a name="ServiceEventRuleActionsPriority" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsPriority {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriority.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriority.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsSeverity <a name="ServiceEventRuleActionsSeverity" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsSeverity {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverity.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverity.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsSuppress <a name="ServiceEventRuleActionsSuppress" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsSuppress {
	ThresholdTimeAmount: *f64,
	ThresholdTimeUnit: *string,
	ThresholdValue: *f64,
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.thresholdTimeAmount">ThresholdTimeAmount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#threshold_time_amount ServiceEventRule#threshold_time_amount}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.thresholdTimeUnit">ThresholdTimeUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#threshold_time_unit ServiceEventRule#threshold_time_unit}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#threshold_value ServiceEventRule#threshold_value}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `ThresholdTimeAmount`<sup>Optional</sup> <a name="ThresholdTimeAmount" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.thresholdTimeAmount"></a>

```go
ThresholdTimeAmount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#threshold_time_amount ServiceEventRule#threshold_time_amount}.

---

##### `ThresholdTimeUnit`<sup>Optional</sup> <a name="ThresholdTimeUnit" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.thresholdTimeUnit"></a>

```go
ThresholdTimeUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#threshold_time_unit ServiceEventRule#threshold_time_unit}.

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.thresholdValue"></a>

```go
ThresholdValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#threshold_value ServiceEventRule#threshold_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppress.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleActionsSuspend <a name="ServiceEventRuleActionsSuspend" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleActionsSuspend {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspend.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspend.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleConditions <a name="ServiceEventRuleConditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleConditions {
	Operator: *string,
	Subconditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#operator ServiceEventRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions.property.subconditions">Subconditions</a></code> | <code>interface{}</code> | subconditions block. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#operator ServiceEventRule#operator}.

---

##### `Subconditions`<sup>Optional</sup> <a name="Subconditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions.property.subconditions"></a>

```go
Subconditions interface{}
```

- *Type:* interface{}

subconditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#subconditions ServiceEventRule#subconditions}

---

### ServiceEventRuleConditionsSubconditions <a name="ServiceEventRuleConditionsSubconditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleConditionsSubconditions {
	Operator: *string,
	Parameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditions.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#operator ServiceEventRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditions.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#operator ServiceEventRule#operator}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditions.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#parameter ServiceEventRule#parameter}

---

### ServiceEventRuleConditionsSubconditionsParameter <a name="ServiceEventRuleConditionsSubconditionsParameter" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleConditionsSubconditionsParameter {
	Path: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameter.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#path ServiceEventRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameter.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#path ServiceEventRule#path}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

### ServiceEventRuleConfig <a name="ServiceEventRuleConfig" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Actions: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty.serviceEventRule.ServiceEventRuleActions,
	Conditions: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty.serviceEventRule.ServiceEventRuleConditions,
	Disabled: interface{},
	Id: *string,
	Position: *f64,
	TimeFrame: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty.serviceEventRule.ServiceEventRuleTimeFrame,
	Variable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#service ServiceEventRule#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#disabled ServiceEventRule#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#id ServiceEventRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#position ServiceEventRule#position}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.timeFrame">TimeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a></code> | time_frame block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.variable">Variable</a></code> | <code>interface{}</code> | variable block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#service ServiceEventRule#service}.

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.actions"></a>

```go
Actions ServiceEventRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#actions ServiceEventRule#actions}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.conditions"></a>

```go
Conditions ServiceEventRuleConditions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#conditions ServiceEventRule#conditions}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#disabled ServiceEventRule#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#id ServiceEventRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#position ServiceEventRule#position}.

---

##### `TimeFrame`<sup>Optional</sup> <a name="TimeFrame" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.timeFrame"></a>

```go
TimeFrame ServiceEventRuleTimeFrame
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a>

time_frame block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#time_frame ServiceEventRule#time_frame}

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConfig.property.variable"></a>

```go
Variable interface{}
```

- *Type:* interface{}

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#variable ServiceEventRule#variable}

---

### ServiceEventRuleTimeFrame <a name="ServiceEventRuleTimeFrame" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleTimeFrame {
	ActiveBetween: interface{},
	ScheduledWeekly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame.property.activeBetween">ActiveBetween</a></code> | <code>interface{}</code> | active_between block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame.property.scheduledWeekly">ScheduledWeekly</a></code> | <code>interface{}</code> | scheduled_weekly block. |

---

##### `ActiveBetween`<sup>Optional</sup> <a name="ActiveBetween" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame.property.activeBetween"></a>

```go
ActiveBetween interface{}
```

- *Type:* interface{}

active_between block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#active_between ServiceEventRule#active_between}

---

##### `ScheduledWeekly`<sup>Optional</sup> <a name="ScheduledWeekly" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame.property.scheduledWeekly"></a>

```go
ScheduledWeekly interface{}
```

- *Type:* interface{}

scheduled_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#scheduled_weekly ServiceEventRule#scheduled_weekly}

---

### ServiceEventRuleTimeFrameActiveBetween <a name="ServiceEventRuleTimeFrameActiveBetween" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetween"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetween.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleTimeFrameActiveBetween {
	EndTime: *f64,
	StartTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetween.property.endTime">EndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#end_time ServiceEventRule#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetween.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#start_time ServiceEventRule#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetween.property.endTime"></a>

```go
EndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#end_time ServiceEventRule#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetween.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#start_time ServiceEventRule#start_time}.

---

### ServiceEventRuleTimeFrameScheduledWeekly <a name="ServiceEventRuleTimeFrameScheduledWeekly" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleTimeFrameScheduledWeekly {
	Duration: *f64,
	StartTime: *f64,
	Timezone: *string,
	Weekdays: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#duration ServiceEventRule#duration}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#start_time ServiceEventRule#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#timezone ServiceEventRule#timezone}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.weekdays">Weekdays</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#weekdays ServiceEventRule#weekdays}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#duration ServiceEventRule#duration}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#start_time ServiceEventRule#start_time}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#timezone ServiceEventRule#timezone}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeekly.property.weekdays"></a>

```go
Weekdays *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#weekdays ServiceEventRule#weekdays}.

---

### ServiceEventRuleVariable <a name="ServiceEventRuleVariable" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleVariable {
	Name: *string,
	Parameters: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#name ServiceEventRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#type ServiceEventRule#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#name ServiceEventRule#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#parameters ServiceEventRule#parameters}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#type ServiceEventRule#type}.

---

### ServiceEventRuleVariableParameters <a name="ServiceEventRuleVariableParameters" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

&serviceeventrule.ServiceEventRuleVariableParameters {
	Path: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParameters.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#path ServiceEventRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParameters.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#path ServiceEventRule#path}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/service_event_rule#value ServiceEventRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceEventRuleActionsAnnotateList <a name="ServiceEventRuleActionsAnnotateList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsAnnotateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsAnnotateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsAnnotateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsAnnotateOutputReference <a name="ServiceEventRuleActionsAnnotateOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsAnnotateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsAnnotateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsEventActionList <a name="ServiceEventRuleActionsEventActionList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsEventActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsEventActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsEventActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsEventActionOutputReference <a name="ServiceEventRuleActionsEventActionOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsEventActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsEventActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsExtractionsList <a name="ServiceEventRuleActionsExtractionsList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsExtractionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsExtractionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsExtractionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsExtractionsOutputReference <a name="ServiceEventRuleActionsExtractionsOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsExtractionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsExtractionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsOutputReference <a name="ServiceEventRuleActionsOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceEventRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putAnnotate">PutAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putEventAction">PutEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putExtractions">PutExtractions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putPriority">PutPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSeverity">PutSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSuppress">PutSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSuspend">PutSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetAnnotate">ResetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetExtractions">ResetExtractions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetSuppress">ResetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnnotate` <a name="PutAnnotate" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putAnnotate"></a>

```go
func PutAnnotate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putAnnotate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventAction` <a name="PutEventAction" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putEventAction"></a>

```go
func PutEventAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putEventAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExtractions` <a name="PutExtractions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putExtractions"></a>

```go
func PutExtractions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putExtractions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPriority` <a name="PutPriority" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putPriority"></a>

```go
func PutPriority(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putPriority.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSeverity` <a name="PutSeverity" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSeverity"></a>

```go
func PutSeverity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSeverity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSuppress` <a name="PutSuppress" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSuppress"></a>

```go
func PutSuppress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSuppress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSuspend` <a name="PutSuspend" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSuspend"></a>

```go
func PutSuspend(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.putSuspend.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotate` <a name="ResetAnnotate" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetAnnotate"></a>

```go
func ResetAnnotate()
```

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetEventAction"></a>

```go
func ResetEventAction()
```

##### `ResetExtractions` <a name="ResetExtractions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetExtractions"></a>

```go
func ResetExtractions()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetSuppress` <a name="ResetSuppress" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetSuppress"></a>

```go
func ResetSuppress()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.resetSuspend"></a>

```go
func ResetSuspend()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.annotate">Annotate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList">ServiceEventRuleActionsAnnotateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.eventAction">EventAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList">ServiceEventRuleActionsEventActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.extractions">Extractions</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList">ServiceEventRuleActionsExtractionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.priority">Priority</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList">ServiceEventRuleActionsPriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList">ServiceEventRuleActionsSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suppress">Suppress</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList">ServiceEventRuleActionsSuppressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suspend">Suspend</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList">ServiceEventRuleActionsSuspendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.annotateInput">AnnotateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.extractionsInput">ExtractionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.severityInput">SeverityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suppressInput">SuppressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suspendInput">SuspendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotate`<sup>Required</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.annotate"></a>

```go
func Annotate() ServiceEventRuleActionsAnnotateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsAnnotateList">ServiceEventRuleActionsAnnotateList</a>

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.eventAction"></a>

```go
func EventAction() ServiceEventRuleActionsEventActionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsEventActionList">ServiceEventRuleActionsEventActionList</a>

---

##### `Extractions`<sup>Required</sup> <a name="Extractions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.extractions"></a>

```go
func Extractions() ServiceEventRuleActionsExtractionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsExtractionsList">ServiceEventRuleActionsExtractionsList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.priority"></a>

```go
func Priority() ServiceEventRuleActionsPriorityList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList">ServiceEventRuleActionsPriorityList</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.severity"></a>

```go
func Severity() ServiceEventRuleActionsSeverityList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList">ServiceEventRuleActionsSeverityList</a>

---

##### `Suppress`<sup>Required</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suppress"></a>

```go
func Suppress() ServiceEventRuleActionsSuppressList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList">ServiceEventRuleActionsSuppressList</a>

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suspend"></a>

```go
func Suspend() ServiceEventRuleActionsSuspendList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList">ServiceEventRuleActionsSuspendList</a>

---

##### `AnnotateInput`<sup>Optional</sup> <a name="AnnotateInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.annotateInput"></a>

```go
func AnnotateInput() interface{}
```

- *Type:* interface{}

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.eventActionInput"></a>

```go
func EventActionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtractionsInput`<sup>Optional</sup> <a name="ExtractionsInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.extractionsInput"></a>

```go
func ExtractionsInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.severityInput"></a>

```go
func SeverityInput() interface{}
```

- *Type:* interface{}

---

##### `SuppressInput`<sup>Optional</sup> <a name="SuppressInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suppressInput"></a>

```go
func SuppressInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.suspendInput"></a>

```go
func SuspendInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceEventRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActions">ServiceEventRuleActions</a>

---


### ServiceEventRuleActionsPriorityList <a name="ServiceEventRuleActionsPriorityList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsPriorityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsPriorityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsPriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsPriorityOutputReference <a name="ServiceEventRuleActionsPriorityOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsPriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsPriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsPriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsSeverityList <a name="ServiceEventRuleActionsSeverityList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsSeverityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsSeverityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsSeverityOutputReference <a name="ServiceEventRuleActionsSeverityOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsSeverityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsSeverityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSeverityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsSuppressList <a name="ServiceEventRuleActionsSuppressList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsSuppressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsSuppressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsSuppressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsSuppressOutputReference <a name="ServiceEventRuleActionsSuppressOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsSuppressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsSuppressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetThresholdTimeAmount">ResetThresholdTimeAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetThresholdTimeUnit">ResetThresholdTimeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThresholdTimeAmount` <a name="ResetThresholdTimeAmount" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetThresholdTimeAmount"></a>

```go
func ResetThresholdTimeAmount()
```

##### `ResetThresholdTimeUnit` <a name="ResetThresholdTimeUnit" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetThresholdTimeUnit"></a>

```go
func ResetThresholdTimeUnit()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetThresholdValue"></a>

```go
func ResetThresholdValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput">ThresholdTimeAmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput">ThresholdTimeUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeAmount">ThresholdTimeAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeUnit">ThresholdTimeUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdTimeAmountInput`<sup>Optional</sup> <a name="ThresholdTimeAmountInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput"></a>

```go
func ThresholdTimeAmountInput() *f64
```

- *Type:* *f64

---

##### `ThresholdTimeUnitInput`<sup>Optional</sup> <a name="ThresholdTimeUnitInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput"></a>

```go
func ThresholdTimeUnitInput() *string
```

- *Type:* *string

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdValueInput"></a>

```go
func ThresholdValueInput() *f64
```

- *Type:* *f64

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdTimeAmount`<sup>Required</sup> <a name="ThresholdTimeAmount" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeAmount"></a>

```go
func ThresholdTimeAmount() *f64
```

- *Type:* *f64

---

##### `ThresholdTimeUnit`<sup>Required</sup> <a name="ThresholdTimeUnit" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdTimeUnit"></a>

```go
func ThresholdTimeUnit() *string
```

- *Type:* *string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.thresholdValue"></a>

```go
func ThresholdValue() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuppressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsSuspendList <a name="ServiceEventRuleActionsSuspendList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsSuspendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleActionsSuspendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.get"></a>

```go
func Get(index *f64) ServiceEventRuleActionsSuspendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleActionsSuspendOutputReference <a name="ServiceEventRuleActionsSuspendOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleActionsSuspendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleActionsSuspendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleActionsSuspendOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleConditionsOutputReference <a name="ServiceEventRuleConditionsOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceEventRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.putSubconditions">PutSubconditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resetSubconditions">ResetSubconditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubconditions` <a name="PutSubconditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.putSubconditions"></a>

```go
func PutSubconditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.putSubconditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetSubconditions` <a name="ResetSubconditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.resetSubconditions"></a>

```go
func ResetSubconditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.subconditions">Subconditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList">ServiceEventRuleConditionsSubconditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.subconditionsInput">SubconditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subconditions`<sup>Required</sup> <a name="Subconditions" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.subconditions"></a>

```go
func Subconditions() ServiceEventRuleConditionsSubconditionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList">ServiceEventRuleConditionsSubconditionsList</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `SubconditionsInput`<sup>Optional</sup> <a name="SubconditionsInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.subconditionsInput"></a>

```go
func SubconditionsInput() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceEventRuleConditions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditions">ServiceEventRuleConditions</a>

---


### ServiceEventRuleConditionsSubconditionsList <a name="ServiceEventRuleConditionsSubconditionsList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleConditionsSubconditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleConditionsSubconditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.get"></a>

```go
func Get(index *f64) ServiceEventRuleConditionsSubconditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleConditionsSubconditionsOutputReference <a name="ServiceEventRuleConditionsSubconditionsOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleConditionsSubconditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleConditionsSubconditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.resetParameter"></a>

```go
func ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList">ServiceEventRuleConditionsSubconditionsParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.parameter"></a>

```go
func Parameter() ServiceEventRuleConditionsSubconditionsParameterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList">ServiceEventRuleConditionsSubconditionsParameterList</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleConditionsSubconditionsParameterList <a name="ServiceEventRuleConditionsSubconditionsParameterList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleConditionsSubconditionsParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleConditionsSubconditionsParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.get"></a>

```go
func Get(index *f64) ServiceEventRuleConditionsSubconditionsParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleConditionsSubconditionsParameterOutputReference <a name="ServiceEventRuleConditionsSubconditionsParameterOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleConditionsSubconditionsParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleConditionsSubconditionsParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleConditionsSubconditionsParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleTimeFrameActiveBetweenList <a name="ServiceEventRuleTimeFrameActiveBetweenList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleTimeFrameActiveBetweenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleTimeFrameActiveBetweenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.get"></a>

```go
func Get(index *f64) ServiceEventRuleTimeFrameActiveBetweenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleTimeFrameActiveBetweenOutputReference <a name="ServiceEventRuleTimeFrameActiveBetweenOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleTimeFrameActiveBetweenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleTimeFrameActiveBetweenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleTimeFrameOutputReference <a name="ServiceEventRuleTimeFrameOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleTimeFrameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceEventRuleTimeFrameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.putActiveBetween">PutActiveBetween</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.putScheduledWeekly">PutScheduledWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resetActiveBetween">ResetActiveBetween</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resetScheduledWeekly">ResetScheduledWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveBetween` <a name="PutActiveBetween" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.putActiveBetween"></a>

```go
func PutActiveBetween(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.putActiveBetween.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduledWeekly` <a name="PutScheduledWeekly" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.putScheduledWeekly"></a>

```go
func PutScheduledWeekly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.putScheduledWeekly.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActiveBetween` <a name="ResetActiveBetween" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resetActiveBetween"></a>

```go
func ResetActiveBetween()
```

##### `ResetScheduledWeekly` <a name="ResetScheduledWeekly" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.resetScheduledWeekly"></a>

```go
func ResetScheduledWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.activeBetween">ActiveBetween</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList">ServiceEventRuleTimeFrameActiveBetweenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.scheduledWeekly">ScheduledWeekly</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList">ServiceEventRuleTimeFrameScheduledWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.activeBetweenInput">ActiveBetweenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.scheduledWeeklyInput">ScheduledWeeklyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveBetween`<sup>Required</sup> <a name="ActiveBetween" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.activeBetween"></a>

```go
func ActiveBetween() ServiceEventRuleTimeFrameActiveBetweenList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameActiveBetweenList">ServiceEventRuleTimeFrameActiveBetweenList</a>

---

##### `ScheduledWeekly`<sup>Required</sup> <a name="ScheduledWeekly" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.scheduledWeekly"></a>

```go
func ScheduledWeekly() ServiceEventRuleTimeFrameScheduledWeeklyList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList">ServiceEventRuleTimeFrameScheduledWeeklyList</a>

---

##### `ActiveBetweenInput`<sup>Optional</sup> <a name="ActiveBetweenInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.activeBetweenInput"></a>

```go
func ActiveBetweenInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledWeeklyInput`<sup>Optional</sup> <a name="ScheduledWeeklyInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.scheduledWeeklyInput"></a>

```go
func ScheduledWeeklyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceEventRuleTimeFrame
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrame">ServiceEventRuleTimeFrame</a>

---


### ServiceEventRuleTimeFrameScheduledWeeklyList <a name="ServiceEventRuleTimeFrameScheduledWeeklyList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleTimeFrameScheduledWeeklyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleTimeFrameScheduledWeeklyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.get"></a>

```go
func Get(index *f64) ServiceEventRuleTimeFrameScheduledWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleTimeFrameScheduledWeeklyOutputReference <a name="ServiceEventRuleTimeFrameScheduledWeeklyOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleTimeFrameScheduledWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleTimeFrameScheduledWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays"></a>

```go
func ResetWeekdays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays">Weekdays</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput"></a>

```go
func WeekdaysInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays"></a>

```go
func Weekdays() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleVariableList <a name="ServiceEventRuleVariableList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.get"></a>

```go
func Get(index *f64) ServiceEventRuleVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleVariableOutputReference <a name="ServiceEventRuleVariableOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList">ServiceEventRuleVariableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.parameters"></a>

```go
func Parameters() ServiceEventRuleVariableParametersList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList">ServiceEventRuleVariableParametersList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleVariableParametersList <a name="ServiceEventRuleVariableParametersList" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleVariableParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceEventRuleVariableParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.get"></a>

```go
func Get(index *f64) ServiceEventRuleVariableParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceEventRuleVariableParametersOutputReference <a name="ServiceEventRuleVariableParametersOutputReference" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceeventrule"

serviceeventrule.NewServiceEventRuleVariableParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceEventRuleVariableParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceEventRule.ServiceEventRuleVariableParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



