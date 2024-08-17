# `eventOrchestrationIntegration` Submodule <a name="`eventOrchestrationIntegration` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationIntegrationA <a name="EventOrchestrationIntegrationA" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/event_orchestration_integration pagerduty_event_orchestration_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.NewEventOrchestrationIntegrationA(scope Construct, id *string, config EventOrchestrationIntegrationAConfig) EventOrchestrationIntegrationA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig">EventOrchestrationIntegrationAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig">EventOrchestrationIntegrationAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.EventOrchestrationIntegrationA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.EventOrchestrationIntegrationA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.EventOrchestrationIntegrationA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.EventOrchestrationIntegrationA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventOrchestrationIntegrationA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventOrchestrationIntegrationA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/event_orchestration_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationIntegrationA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList">EventOrchestrationIntegrationParametersAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.eventOrchestrationInput">EventOrchestrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.eventOrchestration">EventOrchestration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.label">Label</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.parameters"></a>

```go
func Parameters() EventOrchestrationIntegrationParametersAList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList">EventOrchestrationIntegrationParametersAList</a>

---

##### `EventOrchestrationInput`<sup>Optional</sup> <a name="EventOrchestrationInput" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.eventOrchestrationInput"></a>

```go
func EventOrchestrationInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.eventOrchestration"></a>

```go
func EventOrchestration() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationIntegrationAConfig <a name="EventOrchestrationIntegrationAConfig" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

&eventorchestrationintegration.EventOrchestrationIntegrationAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventOrchestration: *string,
	Label: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.eventOrchestration">EventOrchestration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/event_orchestration_integration#event_orchestration EventOrchestrationIntegrationA#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/event_orchestration_integration#label EventOrchestrationIntegrationA#label}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.eventOrchestration"></a>

```go
EventOrchestration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/event_orchestration_integration#event_orchestration EventOrchestrationIntegrationA#event_orchestration}.

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationAConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/event_orchestration_integration#label EventOrchestrationIntegrationA#label}.

---

### EventOrchestrationIntegrationParametersA <a name="EventOrchestrationIntegrationParametersA" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

&eventorchestrationintegration.EventOrchestrationIntegrationParametersA {

}
```


## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationIntegrationParametersAList <a name="EventOrchestrationIntegrationParametersAList" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.NewEventOrchestrationIntegrationParametersAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationIntegrationParametersAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.get"></a>

```go
func Get(index *f64) EventOrchestrationIntegrationParametersAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EventOrchestrationIntegrationParametersAOutputReference <a name="EventOrchestrationIntegrationParametersAOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/eventorchestrationintegration"

eventorchestrationintegration.NewEventOrchestrationIntegrationParametersAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationIntegrationParametersAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.routingKey">RoutingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersA">EventOrchestrationIntegrationParametersA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoutingKey`<sup>Required</sup> <a name="RoutingKey" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.routingKey"></a>

```go
func RoutingKey() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersAOutputReference.property.internalValue"></a>

```go
func InternalValue() EventOrchestrationIntegrationParametersA
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationIntegration.EventOrchestrationIntegrationParametersA">EventOrchestrationIntegrationParametersA</a>

---



