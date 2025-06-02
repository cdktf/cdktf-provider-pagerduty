# `incidentWorkflow` Submodule <a name="`incidentWorkflow` Submodule" id="@cdktf/provider-pagerduty.incidentWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflow <a name="IncidentWorkflow" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow pagerduty_incident_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflow(scope Construct, id *string, config IncidentWorkflowConfig) IncidentWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig">IncidentWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig">IncidentWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep">ResetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam">ResetTeam</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStep` <a name="PutStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep"></a>

```go
func PutStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetStep` <a name="ResetStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep"></a>

```go
func ResetStep()
```

##### `ResetTeam` <a name="ResetTeam" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam"></a>

```go
func ResetTeam()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.IncidentWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.IncidentWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.IncidentWorkflow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.IncidentWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IncidentWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IncidentWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IncidentWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step">Step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabledInput">IsEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput">StepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput">TeamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabled">IsEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team">Team</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step"></a>

```go
func Step() IncidentWorkflowStepList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabledInput"></a>

```go
func IsEnabledInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput"></a>

```go
func StepInput() interface{}
```

- *Type:* interface{}

---

##### `TeamInput`<sup>Optional</sup> <a name="TeamInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput"></a>

```go
func TeamInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabled"></a>

```go
func IsEnabled() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team"></a>

```go
func Team() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowConfig <a name="IncidentWorkflowConfig" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

&incidentworkflow.IncidentWorkflowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	IsEnabled: *string,
	Step: interface{},
	Team: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#description IncidentWorkflow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#id IncidentWorkflow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.isEnabled">IsEnabled</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#is_enabled IncidentWorkflow#is_enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step">Step</a></code> | <code>interface{}</code> | step block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team">Team</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#team IncidentWorkflow#team}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#description IncidentWorkflow#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#id IncidentWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.isEnabled"></a>

```go
IsEnabled *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#is_enabled IncidentWorkflow#is_enabled}.

---

##### `Step`<sup>Optional</sup> <a name="Step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step"></a>

```go
Step interface{}
```

- *Type:* interface{}

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

##### `Team`<sup>Optional</sup> <a name="Team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team"></a>

```go
Team *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#team IncidentWorkflow#team}.

---

### IncidentWorkflowStep <a name="IncidentWorkflowStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

&incidentworkflow.IncidentWorkflowStep {
	Action: *string,
	Name: *string,
	InlineStepsInput: interface{},
	Input: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput">InlineStepsInput</a></code> | <code>interface{}</code> | inline_steps_input block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input">Input</a></code> | <code>interface{}</code> | input block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `InlineStepsInput`<sup>Optional</sup> <a name="InlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput"></a>

```go
InlineStepsInput interface{}
```

- *Type:* interface{}

inline_steps_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#inline_steps_input IncidentWorkflow#inline_steps_input}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInput <a name="IncidentWorkflowStepInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

&incidentworkflow.IncidentWorkflowStepInlineStepsInput {
	Name: *string,
	Step: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step">Step</a></code> | <code>interface{}</code> | step block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `Step`<sup>Optional</sup> <a name="Step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step"></a>

```go
Step interface{}
```

- *Type:* interface{}

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

### IncidentWorkflowStepInlineStepsInputStep <a name="IncidentWorkflowStepInlineStepsInputStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

&incidentworkflow.IncidentWorkflowStepInlineStepsInputStep {
	Action: *string,
	Name: *string,
	Input: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input">Input</a></code> | <code>interface{}</code> | input block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input"></a>

```go
Input interface{}
```

- *Type:* interface{}

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInputStepInput <a name="IncidentWorkflowStepInlineStepsInputStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

&incidentworkflow.IncidentWorkflowStepInlineStepsInputStepInput {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

### IncidentWorkflowStepInput <a name="IncidentWorkflowStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

&incidentworkflow.IncidentWorkflowStepInput {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.0/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentWorkflowStepInlineStepsInputList <a name="IncidentWorkflowStepInlineStepsInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInlineStepsInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IncidentWorkflowStepInlineStepsInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get"></a>

```go
func Get(index *f64) IncidentWorkflowStepInlineStepsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInlineStepsInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInlineStepsInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IncidentWorkflowStepInlineStepsInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep">PutStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep">ResetStep</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStep` <a name="PutStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep"></a>

```go
func PutStep(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStep` <a name="ResetStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep"></a>

```go
func ResetStep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step">Step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput">StepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Step`<sup>Required</sup> <a name="Step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step"></a>

```go
func Step() IncidentWorkflowStepInlineStepsInputStepList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StepInput`<sup>Optional</sup> <a name="StepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput"></a>

```go
func StepInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInlineStepsInputStepInputList <a name="IncidentWorkflowStepInlineStepsInputStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInlineStepsInputStepInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IncidentWorkflowStepInlineStepsInputStepInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get"></a>

```go
func Get(index *f64) IncidentWorkflowStepInlineStepsInputStepInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInlineStepsInputStepInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInlineStepsInputStepInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IncidentWorkflowStepInlineStepsInputStepInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated">Generated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generated`<sup>Required</sup> <a name="Generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated"></a>

```go
func Generated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInlineStepsInputStepList <a name="IncidentWorkflowStepInlineStepsInputStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInlineStepsInputStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IncidentWorkflowStepInlineStepsInputStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get"></a>

```go
func Get(index *f64) IncidentWorkflowStepInlineStepsInputStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInlineStepsInputStepOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInlineStepsInputStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IncidentWorkflowStepInlineStepsInputStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput">ResetInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput"></a>

```go
func ResetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input"></a>

```go
func Input() IncidentWorkflowStepInlineStepsInputStepInputList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInputList <a name="IncidentWorkflowStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IncidentWorkflowStepInputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get"></a>

```go
func Get(index *f64) IncidentWorkflowStepInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepInputOutputReference <a name="IncidentWorkflowStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IncidentWorkflowStepInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated">Generated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generated`<sup>Required</sup> <a name="Generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated"></a>

```go
func Generated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepList <a name="IncidentWorkflowStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IncidentWorkflowStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get"></a>

```go
func Get(index *f64) IncidentWorkflowStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentWorkflowStepOutputReference <a name="IncidentWorkflowStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/incidentworkflow"

incidentworkflow.NewIncidentWorkflowStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IncidentWorkflowStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput">PutInlineStepsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput">ResetInlineStepsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput">ResetInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInlineStepsInput` <a name="PutInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput"></a>

```go
func PutInlineStepsInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput"></a>

```go
func PutInput(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInlineStepsInput` <a name="ResetInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput"></a>

```go
func ResetInlineStepsInput()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput"></a>

```go
func ResetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput">InlineStepsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput">InlineStepsInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InlineStepsInput`<sup>Required</sup> <a name="InlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput"></a>

```go
func InlineStepsInput() IncidentWorkflowStepInlineStepsInputList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a>

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input"></a>

```go
func Input() IncidentWorkflowStepInputList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `InlineStepsInputInput`<sup>Optional</sup> <a name="InlineStepsInputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput"></a>

```go
func InlineStepsInputInput() interface{}
```

- *Type:* interface{}

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



