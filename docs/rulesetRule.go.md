# `pagerduty_ruleset_rule`

Refer to the Terraform Registory for docs: [`pagerduty_ruleset_rule`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule).

# `rulesetRule` Submodule <a name="`rulesetRule` Submodule" id="@cdktf/provider-pagerduty.rulesetRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RulesetRule <a name="RulesetRule" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule pagerduty_ruleset_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRule(scope Construct, id *string, config RulesetRuleConfig) RulesetRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig">RulesetRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig">RulesetRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame">PutTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetCatchAll">ResetCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetTimeFrame">ResetTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions"></a>

```go
func PutActions(value RulesetRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions"></a>

```go
func PutConditions(value RulesetRuleConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---

##### `PutTimeFrame` <a name="PutTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame"></a>

```go
func PutTimeFrame(value RulesetRuleTimeFrame)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putTimeFrame.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable"></a>

```go
func PutVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.putVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetActions"></a>

```go
func ResetActions()
```

##### `ResetCatchAll` <a name="ResetCatchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetCatchAll"></a>

```go
func ResetCatchAll()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetTimeFrame` <a name="ResetTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetTimeFrame"></a>

```go
func ResetTimeFrame()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.resetVariable"></a>

```go
func ResetVariable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.RulesetRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.RulesetRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.RulesetRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference">RulesetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference">RulesetRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrame">TimeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference">RulesetRuleTimeFrameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList">RulesetRuleVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAllInput">CatchAllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.rulesetInput">RulesetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrameInput">TimeFrameInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variableInput">VariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAll">CatchAll</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.ruleset">Ruleset</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actions"></a>

```go
func Actions() RulesetRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference">RulesetRuleActionsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditions"></a>

```go
func Conditions() RulesetRuleConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference">RulesetRuleConditionsOutputReference</a>

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrame"></a>

```go
func TimeFrame() RulesetRuleTimeFrameOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference">RulesetRuleTimeFrameOutputReference</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variable"></a>

```go
func Variable() RulesetRuleVariableList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList">RulesetRuleVariableList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.actionsInput"></a>

```go
func ActionsInput() RulesetRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---

##### `CatchAllInput`<sup>Optional</sup> <a name="CatchAllInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAllInput"></a>

```go
func CatchAllInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.conditionsInput"></a>

```go
func ConditionsInput() RulesetRuleConditions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `RulesetInput`<sup>Optional</sup> <a name="RulesetInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.rulesetInput"></a>

```go
func RulesetInput() *string
```

- *Type:* *string

---

##### `TimeFrameInput`<sup>Optional</sup> <a name="TimeFrameInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.timeFrameInput"></a>

```go
func TimeFrameInput() RulesetRuleTimeFrame
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.variableInput"></a>

```go
func VariableInput() interface{}
```

- *Type:* interface{}

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.catchAll"></a>

```go
func CatchAll() interface{}
```

- *Type:* interface{}

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.ruleset"></a>

```go
func Ruleset() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetRuleActions <a name="RulesetRuleActions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActions {
	Annotate: interface{},
	EventAction: interface{},
	Extractions: interface{},
	Priority: interface{},
	Route: interface{},
	Severity: interface{},
	Suppress: interface{},
	Suspend: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.annotate">Annotate</a></code> | <code>interface{}</code> | annotate block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.eventAction">EventAction</a></code> | <code>interface{}</code> | event_action block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.extractions">Extractions</a></code> | <code>interface{}</code> | extractions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.priority">Priority</a></code> | <code>interface{}</code> | priority block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.route">Route</a></code> | <code>interface{}</code> | route block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.severity">Severity</a></code> | <code>interface{}</code> | severity block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suppress">Suppress</a></code> | <code>interface{}</code> | suppress block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suspend">Suspend</a></code> | <code>interface{}</code> | suspend block. |

---

##### `Annotate`<sup>Optional</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.annotate"></a>

```go
Annotate interface{}
```

- *Type:* interface{}

annotate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#annotate RulesetRule#annotate}

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.eventAction"></a>

```go
EventAction interface{}
```

- *Type:* interface{}

event_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#event_action RulesetRule#event_action}

---

##### `Extractions`<sup>Optional</sup> <a name="Extractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.extractions"></a>

```go
Extractions interface{}
```

- *Type:* interface{}

extractions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#extractions RulesetRule#extractions}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.priority"></a>

```go
Priority interface{}
```

- *Type:* interface{}

priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#priority RulesetRule#priority}

---

##### `Route`<sup>Optional</sup> <a name="Route" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.route"></a>

```go
Route interface{}
```

- *Type:* interface{}

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#route RulesetRule#route}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.severity"></a>

```go
Severity interface{}
```

- *Type:* interface{}

severity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#severity RulesetRule#severity}

---

##### `Suppress`<sup>Optional</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suppress"></a>

```go
Suppress interface{}
```

- *Type:* interface{}

suppress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#suppress RulesetRule#suppress}

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions.property.suspend"></a>

```go
Suspend interface{}
```

- *Type:* interface{}

suspend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#suspend RulesetRule#suspend}

---

### RulesetRuleActionsAnnotate <a name="RulesetRuleActionsAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsAnnotate {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotate.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsEventAction <a name="RulesetRuleActionsEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsEventAction {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventAction.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsExtractions <a name="RulesetRuleActionsExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsExtractions {
	Regex: *string,
	Source: *string,
	Target: *string,
	Template: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#regex RulesetRule#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#source RulesetRule#source}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#target RulesetRule#target}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#template RulesetRule#template}. |

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#regex RulesetRule#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#source RulesetRule#source}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#target RulesetRule#target}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractions.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#template RulesetRule#template}.

---

### RulesetRuleActionsPriority <a name="RulesetRuleActionsPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsPriority {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriority.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsRoute <a name="RulesetRuleActionsRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsRoute {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRoute.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSeverity <a name="RulesetRuleActionsSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsSeverity {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverity.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSuppress <a name="RulesetRuleActionsSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsSuppress {
	ThresholdTimeAmount: *f64,
	ThresholdTimeUnit: *string,
	ThresholdValue: *f64,
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeAmount">ThresholdTimeAmount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeUnit">ThresholdTimeUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `ThresholdTimeAmount`<sup>Optional</sup> <a name="ThresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeAmount"></a>

```go
ThresholdTimeAmount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#threshold_time_amount RulesetRule#threshold_time_amount}.

---

##### `ThresholdTimeUnit`<sup>Optional</sup> <a name="ThresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdTimeUnit"></a>

```go
ThresholdTimeUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#threshold_time_unit RulesetRule#threshold_time_unit}.

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.thresholdValue"></a>

```go
ThresholdValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#threshold_value RulesetRule#threshold_value}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppress.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleActionsSuspend <a name="RulesetRuleActionsSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleActionsSuspend {
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspend.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleConditions <a name="RulesetRuleConditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleConditions {
	Operator: *string,
	Subconditions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#operator RulesetRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.subconditions">Subconditions</a></code> | <code>interface{}</code> | subconditions block. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#operator RulesetRule#operator}.

---

##### `Subconditions`<sup>Optional</sup> <a name="Subconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions.property.subconditions"></a>

```go
Subconditions interface{}
```

- *Type:* interface{}

subconditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#subconditions RulesetRule#subconditions}

---

### RulesetRuleConditionsSubconditions <a name="RulesetRuleConditionsSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleConditionsSubconditions {
	Operator: *string,
	Parameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#operator RulesetRule#operator}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#operator RulesetRule#operator}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditions.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#parameter RulesetRule#parameter}

---

### RulesetRuleConditionsSubconditionsParameter <a name="RulesetRuleConditionsSubconditionsParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleConditionsSubconditionsParameter {
	Path: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#path RulesetRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#path RulesetRule#path}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

### RulesetRuleConfig <a name="RulesetRuleConfig" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ruleset: *string,
	Actions: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9.rulesetRule.RulesetRuleActions,
	CatchAll: interface{},
	Conditions: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9.rulesetRule.RulesetRuleConditions,
	Disabled: interface{},
	Id: *string,
	Position: *f64,
	TimeFrame: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9.rulesetRule.RulesetRuleTimeFrame,
	Variable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.ruleset">Ruleset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.catchAll">CatchAll</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#disabled RulesetRule#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#id RulesetRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#position RulesetRule#position}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.timeFrame">TimeFrame</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | time_frame block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.variable">Variable</a></code> | <code>interface{}</code> | variable block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.ruleset"></a>

```go
Ruleset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#ruleset RulesetRule#ruleset}.

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.actions"></a>

```go
Actions RulesetRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#actions RulesetRule#actions}

---

##### `CatchAll`<sup>Optional</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.catchAll"></a>

```go
CatchAll interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#catch_all RulesetRule#catch_all}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.conditions"></a>

```go
Conditions RulesetRuleConditions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#conditions RulesetRule#conditions}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#disabled RulesetRule#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#id RulesetRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#position RulesetRule#position}.

---

##### `TimeFrame`<sup>Optional</sup> <a name="TimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.timeFrame"></a>

```go
TimeFrame RulesetRuleTimeFrame
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

time_frame block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#time_frame RulesetRule#time_frame}

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConfig.property.variable"></a>

```go
Variable interface{}
```

- *Type:* interface{}

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#variable RulesetRule#variable}

---

### RulesetRuleTimeFrame <a name="RulesetRuleTimeFrame" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleTimeFrame {
	ActiveBetween: interface{},
	ScheduledWeekly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.activeBetween">ActiveBetween</a></code> | <code>interface{}</code> | active_between block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.scheduledWeekly">ScheduledWeekly</a></code> | <code>interface{}</code> | scheduled_weekly block. |

---

##### `ActiveBetween`<sup>Optional</sup> <a name="ActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.activeBetween"></a>

```go
ActiveBetween interface{}
```

- *Type:* interface{}

active_between block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#active_between RulesetRule#active_between}

---

##### `ScheduledWeekly`<sup>Optional</sup> <a name="ScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame.property.scheduledWeekly"></a>

```go
ScheduledWeekly interface{}
```

- *Type:* interface{}

scheduled_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#scheduled_weekly RulesetRule#scheduled_weekly}

---

### RulesetRuleTimeFrameActiveBetween <a name="RulesetRuleTimeFrameActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleTimeFrameActiveBetween {
	EndTime: *f64,
	StartTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.endTime">EndTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#end_time RulesetRule#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.endTime"></a>

```go
EndTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#end_time RulesetRule#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetween.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}.

---

### RulesetRuleTimeFrameScheduledWeekly <a name="RulesetRuleTimeFrameScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleTimeFrameScheduledWeekly {
	Duration: *f64,
	StartTime: *f64,
	Timezone: *string,
	Weekdays: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#duration RulesetRule#duration}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.startTime">StartTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#timezone RulesetRule#timezone}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.weekdays">Weekdays</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#duration RulesetRule#duration}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.startTime"></a>

```go
StartTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#start_time RulesetRule#start_time}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#timezone RulesetRule#timezone}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeekly.property.weekdays"></a>

```go
Weekdays *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#weekdays RulesetRule#weekdays}.

---

### RulesetRuleVariable <a name="RulesetRuleVariable" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleVariable {
	Name: *string,
	Parameters: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#name RulesetRule#name}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#type RulesetRule#type}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#name RulesetRule#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#parameters RulesetRule#parameters}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#type RulesetRule#type}.

---

### RulesetRuleVariableParameters <a name="RulesetRuleVariableParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

&rulesetrule.RulesetRuleVariableParameters {
	Path: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#path RulesetRule#path}. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#path RulesetRule#path}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.3/docs/resources/ruleset_rule#value RulesetRule#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRuleActionsAnnotateList <a name="RulesetRuleActionsAnnotateList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsAnnotateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsAnnotateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsAnnotateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsAnnotateOutputReference <a name="RulesetRuleActionsAnnotateOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsAnnotateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsAnnotateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsEventActionList <a name="RulesetRuleActionsEventActionList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsEventActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsEventActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsEventActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsEventActionOutputReference <a name="RulesetRuleActionsEventActionOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsEventActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsEventActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsExtractionsList <a name="RulesetRuleActionsExtractionsList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsExtractionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsExtractionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsExtractionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsExtractionsOutputReference <a name="RulesetRuleActionsExtractionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsExtractionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsExtractionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsOutputReference <a name="RulesetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate">PutAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction">PutEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions">PutExtractions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority">PutPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute">PutRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity">PutSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress">PutSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend">PutSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetAnnotate">ResetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetExtractions">ResetExtractions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetRoute">ResetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuppress">ResetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnnotate` <a name="PutAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate"></a>

```go
func PutAnnotate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putAnnotate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventAction` <a name="PutEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction"></a>

```go
func PutEventAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putEventAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExtractions` <a name="PutExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions"></a>

```go
func PutExtractions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putExtractions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPriority` <a name="PutPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority"></a>

```go
func PutPriority(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putPriority.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoute` <a name="PutRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute"></a>

```go
func PutRoute(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putRoute.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSeverity` <a name="PutSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity"></a>

```go
func PutSeverity(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSeverity.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSuppress` <a name="PutSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress"></a>

```go
func PutSuppress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuppress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSuspend` <a name="PutSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend"></a>

```go
func PutSuspend(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.putSuspend.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotate` <a name="ResetAnnotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetAnnotate"></a>

```go
func ResetAnnotate()
```

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetEventAction"></a>

```go
func ResetEventAction()
```

##### `ResetExtractions` <a name="ResetExtractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetExtractions"></a>

```go
func ResetExtractions()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRoute` <a name="ResetRoute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetRoute"></a>

```go
func ResetRoute()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetSuppress` <a name="ResetSuppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuppress"></a>

```go
func ResetSuppress()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.resetSuspend"></a>

```go
func ResetSuspend()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotate">Annotate</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList">RulesetRuleActionsAnnotateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventAction">EventAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList">RulesetRuleActionsEventActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractions">Extractions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList">RulesetRuleActionsExtractionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priority">Priority</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList">RulesetRuleActionsPriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.route">Route</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList">RulesetRuleActionsRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList">RulesetRuleActionsSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppress">Suppress</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList">RulesetRuleActionsSuppressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspend">Suspend</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList">RulesetRuleActionsSuspendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotateInput">AnnotateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractionsInput">ExtractionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.routeInput">RouteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severityInput">SeverityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppressInput">SuppressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspendInput">SuspendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Annotate`<sup>Required</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotate"></a>

```go
func Annotate() RulesetRuleActionsAnnotateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsAnnotateList">RulesetRuleActionsAnnotateList</a>

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventAction"></a>

```go
func EventAction() RulesetRuleActionsEventActionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsEventActionList">RulesetRuleActionsEventActionList</a>

---

##### `Extractions`<sup>Required</sup> <a name="Extractions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractions"></a>

```go
func Extractions() RulesetRuleActionsExtractionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsExtractionsList">RulesetRuleActionsExtractionsList</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priority"></a>

```go
func Priority() RulesetRuleActionsPriorityList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList">RulesetRuleActionsPriorityList</a>

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.route"></a>

```go
func Route() RulesetRuleActionsRouteList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList">RulesetRuleActionsRouteList</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severity"></a>

```go
func Severity() RulesetRuleActionsSeverityList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList">RulesetRuleActionsSeverityList</a>

---

##### `Suppress`<sup>Required</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppress"></a>

```go
func Suppress() RulesetRuleActionsSuppressList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList">RulesetRuleActionsSuppressList</a>

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspend"></a>

```go
func Suspend() RulesetRuleActionsSuspendList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList">RulesetRuleActionsSuspendList</a>

---

##### `AnnotateInput`<sup>Optional</sup> <a name="AnnotateInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.annotateInput"></a>

```go
func AnnotateInput() interface{}
```

- *Type:* interface{}

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.eventActionInput"></a>

```go
func EventActionInput() interface{}
```

- *Type:* interface{}

---

##### `ExtractionsInput`<sup>Optional</sup> <a name="ExtractionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.extractionsInput"></a>

```go
func ExtractionsInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() interface{}
```

- *Type:* interface{}

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.routeInput"></a>

```go
func RouteInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.severityInput"></a>

```go
func SeverityInput() interface{}
```

- *Type:* interface{}

---

##### `SuppressInput`<sup>Optional</sup> <a name="SuppressInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suppressInput"></a>

```go
func SuppressInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.suspendInput"></a>

```go
func SuspendInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActions">RulesetRuleActions</a>

---


### RulesetRuleActionsPriorityList <a name="RulesetRuleActionsPriorityList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsPriorityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsPriorityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsPriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsPriorityOutputReference <a name="RulesetRuleActionsPriorityOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsPriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsPriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsPriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsRouteList <a name="RulesetRuleActionsRouteList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsRouteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsRouteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsRouteOutputReference <a name="RulesetRuleActionsRouteOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsSeverityList <a name="RulesetRuleActionsSeverityList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsSeverityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsSeverityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsSeverityOutputReference <a name="RulesetRuleActionsSeverityOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsSeverityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsSeverityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSeverityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsSuppressList <a name="RulesetRuleActionsSuppressList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsSuppressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsSuppressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsSuppressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsSuppressOutputReference <a name="RulesetRuleActionsSuppressOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsSuppressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsSuppressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeAmount">ResetThresholdTimeAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeUnit">ResetThresholdTimeUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThresholdTimeAmount` <a name="ResetThresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeAmount"></a>

```go
func ResetThresholdTimeAmount()
```

##### `ResetThresholdTimeUnit` <a name="ResetThresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdTimeUnit"></a>

```go
func ResetThresholdTimeUnit()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetThresholdValue"></a>

```go
func ResetThresholdValue()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput">ThresholdTimeAmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput">ThresholdTimeUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmount">ThresholdTimeAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnit">ThresholdTimeUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.value">Value</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ThresholdTimeAmountInput`<sup>Optional</sup> <a name="ThresholdTimeAmountInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmountInput"></a>

```go
func ThresholdTimeAmountInput() *f64
```

- *Type:* *f64

---

##### `ThresholdTimeUnitInput`<sup>Optional</sup> <a name="ThresholdTimeUnitInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnitInput"></a>

```go
func ThresholdTimeUnitInput() *string
```

- *Type:* *string

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValueInput"></a>

```go
func ThresholdValueInput() *f64
```

- *Type:* *f64

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdTimeAmount`<sup>Required</sup> <a name="ThresholdTimeAmount" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeAmount"></a>

```go
func ThresholdTimeAmount() *f64
```

- *Type:* *f64

---

##### `ThresholdTimeUnit`<sup>Required</sup> <a name="ThresholdTimeUnit" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdTimeUnit"></a>

```go
func ThresholdTimeUnit() *string
```

- *Type:* *string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.thresholdValue"></a>

```go
func ThresholdValue() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.value"></a>

```go
func Value() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuppressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsSuspendList <a name="RulesetRuleActionsSuspendList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsSuspendList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleActionsSuspendList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get"></a>

```go
func Get(index *f64) RulesetRuleActionsSuspendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleActionsSuspendOutputReference <a name="RulesetRuleActionsSuspendOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleActionsSuspendOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleActionsSuspendOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleActionsSuspendOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleConditionsOutputReference <a name="RulesetRuleConditionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions">PutSubconditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetSubconditions">ResetSubconditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubconditions` <a name="PutSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions"></a>

```go
func PutSubconditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.putSubconditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetSubconditions` <a name="ResetSubconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.resetSubconditions"></a>

```go
func ResetSubconditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditions">Subconditions</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList">RulesetRuleConditionsSubconditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditionsInput">SubconditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subconditions`<sup>Required</sup> <a name="Subconditions" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditions"></a>

```go
func Subconditions() RulesetRuleConditionsSubconditionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList">RulesetRuleConditionsSubconditionsList</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `SubconditionsInput`<sup>Optional</sup> <a name="SubconditionsInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.subconditionsInput"></a>

```go
func SubconditionsInput() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRuleConditions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditions">RulesetRuleConditions</a>

---


### RulesetRuleConditionsSubconditionsList <a name="RulesetRuleConditionsSubconditionsList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleConditionsSubconditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleConditionsSubconditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get"></a>

```go
func Get(index *f64) RulesetRuleConditionsSubconditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleConditionsSubconditionsOutputReference <a name="RulesetRuleConditionsSubconditionsOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleConditionsSubconditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleConditionsSubconditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.resetParameter"></a>

```go
func ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList">RulesetRuleConditionsSubconditionsParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameter"></a>

```go
func Parameter() RulesetRuleConditionsSubconditionsParameterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList">RulesetRuleConditionsSubconditionsParameterList</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleConditionsSubconditionsParameterList <a name="RulesetRuleConditionsSubconditionsParameterList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleConditionsSubconditionsParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleConditionsSubconditionsParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get"></a>

```go
func Get(index *f64) RulesetRuleConditionsSubconditionsParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleConditionsSubconditionsParameterOutputReference <a name="RulesetRuleConditionsSubconditionsParameterOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleConditionsSubconditionsParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleConditionsSubconditionsParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleConditionsSubconditionsParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleTimeFrameActiveBetweenList <a name="RulesetRuleTimeFrameActiveBetweenList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleTimeFrameActiveBetweenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleTimeFrameActiveBetweenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get"></a>

```go
func Get(index *f64) RulesetRuleTimeFrameActiveBetweenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleTimeFrameActiveBetweenOutputReference <a name="RulesetRuleTimeFrameActiveBetweenOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleTimeFrameActiveBetweenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleTimeFrameActiveBetweenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleTimeFrameOutputReference <a name="RulesetRuleTimeFrameOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleTimeFrameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RulesetRuleTimeFrameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween">PutActiveBetween</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly">PutScheduledWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetActiveBetween">ResetActiveBetween</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetScheduledWeekly">ResetScheduledWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveBetween` <a name="PutActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween"></a>

```go
func PutActiveBetween(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putActiveBetween.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduledWeekly` <a name="PutScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly"></a>

```go
func PutScheduledWeekly(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.putScheduledWeekly.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActiveBetween` <a name="ResetActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetActiveBetween"></a>

```go
func ResetActiveBetween()
```

##### `ResetScheduledWeekly` <a name="ResetScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.resetScheduledWeekly"></a>

```go
func ResetScheduledWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetween">ActiveBetween</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList">RulesetRuleTimeFrameActiveBetweenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly">ScheduledWeekly</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList">RulesetRuleTimeFrameScheduledWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput">ActiveBetweenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput">ScheduledWeeklyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveBetween`<sup>Required</sup> <a name="ActiveBetween" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetween"></a>

```go
func ActiveBetween() RulesetRuleTimeFrameActiveBetweenList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameActiveBetweenList">RulesetRuleTimeFrameActiveBetweenList</a>

---

##### `ScheduledWeekly`<sup>Required</sup> <a name="ScheduledWeekly" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeekly"></a>

```go
func ScheduledWeekly() RulesetRuleTimeFrameScheduledWeeklyList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList">RulesetRuleTimeFrameScheduledWeeklyList</a>

---

##### `ActiveBetweenInput`<sup>Optional</sup> <a name="ActiveBetweenInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.activeBetweenInput"></a>

```go
func ActiveBetweenInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledWeeklyInput`<sup>Optional</sup> <a name="ScheduledWeeklyInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.scheduledWeeklyInput"></a>

```go
func ScheduledWeeklyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameOutputReference.property.internalValue"></a>

```go
func InternalValue() RulesetRuleTimeFrame
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrame">RulesetRuleTimeFrame</a>

---


### RulesetRuleTimeFrameScheduledWeeklyList <a name="RulesetRuleTimeFrameScheduledWeeklyList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleTimeFrameScheduledWeeklyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleTimeFrameScheduledWeeklyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get"></a>

```go
func Get(index *f64) RulesetRuleTimeFrameScheduledWeeklyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleTimeFrameScheduledWeeklyOutputReference <a name="RulesetRuleTimeFrameScheduledWeeklyOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleTimeFrameScheduledWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleTimeFrameScheduledWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.resetWeekdays"></a>

```go
func ResetWeekdays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays">Weekdays</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdaysInput"></a>

```go
func WeekdaysInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.weekdays"></a>

```go
func Weekdays() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleTimeFrameScheduledWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleVariableList <a name="RulesetRuleVariableList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get"></a>

```go
func Get(index *f64) RulesetRuleVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleVariableOutputReference <a name="RulesetRuleVariableOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList">RulesetRuleVariableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parameters"></a>

```go
func Parameters() RulesetRuleVariableParametersList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList">RulesetRuleVariableParametersList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleVariableParametersList <a name="RulesetRuleVariableParametersList" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleVariableParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RulesetRuleVariableParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get"></a>

```go
func Get(index *f64) RulesetRuleVariableParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RulesetRuleVariableParametersOutputReference <a name="RulesetRuleVariableParametersOutputReference" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v9/rulesetrule"

rulesetrule.NewRulesetRuleVariableParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RulesetRuleVariableParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.rulesetRule.RulesetRuleVariableParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



