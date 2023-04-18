# `pagerduty_incident_workflow_trigger`

Refer to the Terraform Registory for docs: [`pagerduty_incident_workflow_trigger`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger).

# `incidentWorkflowTrigger` Submodule <a name="`incidentWorkflowTrigger` Submodule" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflowTrigger <a name="IncidentWorkflowTrigger" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger pagerduty_incident_workflow_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/incidentworkflowtrigger"

incidentworkflowtrigger.NewIncidentWorkflowTrigger(scope Construct, id *string, config IncidentWorkflowTriggerConfig) IncidentWorkflowTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig">IncidentWorkflowTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig">IncidentWorkflowTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.resetServices"></a>

```go
func ResetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/incidentworkflowtrigger"

incidentworkflowtrigger.IncidentWorkflowTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/incidentworkflowtrigger"

incidentworkflowtrigger.IncidentWorkflowTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/incidentworkflowtrigger"

incidentworkflowtrigger.IncidentWorkflowTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServicesInput">SubscribedToAllServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflowInput">WorkflowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServices">SubscribedToAllServices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflow">Workflow</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubscribedToAllServicesInput`<sup>Optional</sup> <a name="SubscribedToAllServicesInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServicesInput"></a>

```go
func SubscribedToAllServicesInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflowInput"></a>

```go
func WorkflowInput() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `SubscribedToAllServices`<sup>Required</sup> <a name="SubscribedToAllServices" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.subscribedToAllServices"></a>

```go
func SubscribedToAllServices() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.workflow"></a>

```go
func Workflow() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowTriggerConfig <a name="IncidentWorkflowTriggerConfig" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/incidentworkflowtrigger"

&incidentworkflowtrigger.IncidentWorkflowTriggerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubscribedToAllServices: interface{},
	Type: *string,
	Workflow: *string,
	Condition: *string,
	Id: *string,
	Services: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.subscribedToAllServices">SubscribedToAllServices</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.workflow">Workflow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.condition">Condition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.services">Services</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscribedToAllServices`<sup>Required</sup> <a name="SubscribedToAllServices" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.subscribedToAllServices"></a>

```go
SubscribedToAllServices interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#subscribed_to_all_services IncidentWorkflowTrigger#subscribed_to_all_services}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#type IncidentWorkflowTrigger#type}.

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.workflow"></a>

```go
Workflow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#workflow IncidentWorkflowTrigger#workflow}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#condition IncidentWorkflowTrigger#condition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#id IncidentWorkflowTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-pagerduty.incidentWorkflowTrigger.IncidentWorkflowTriggerConfig.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/incident_workflow_trigger#services IncidentWorkflowTrigger#services}.

---



