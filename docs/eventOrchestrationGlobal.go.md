# `eventOrchestrationGlobal` Submodule <a name="`eventOrchestrationGlobal` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationGlobal <a name="EventOrchestrationGlobal" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global pagerduty_event_orchestration_global}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobal(scope Construct, id *string, config EventOrchestrationGlobalConfig) EventOrchestrationGlobal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig">EventOrchestrationGlobalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig">EventOrchestrationGlobalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll">PutCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatchAll` <a name="PutCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll"></a>

```go
func PutCatchAll(value EventOrchestrationGlobalCatchAll)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet"></a>

```go
func PutSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationGlobal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.EventOrchestrationGlobal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.EventOrchestrationGlobal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.EventOrchestrationGlobal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.EventOrchestrationGlobal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EventOrchestrationGlobal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventOrchestrationGlobal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventOrchestrationGlobal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationGlobal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAll">CatchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference">EventOrchestrationGlobalCatchAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.set">Set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList">EventOrchestrationGlobalSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAllInput">CatchAllInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestrationInput">EventOrchestrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.setInput">SetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestration">EventOrchestration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAll"></a>

```go
func CatchAll() EventOrchestrationGlobalCatchAllOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference">EventOrchestrationGlobalCatchAllOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.set"></a>

```go
func Set() EventOrchestrationGlobalSetList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList">EventOrchestrationGlobalSetList</a>

---

##### `CatchAllInput`<sup>Optional</sup> <a name="CatchAllInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAllInput"></a>

```go
func CatchAllInput() EventOrchestrationGlobalCatchAll
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---

##### `EventOrchestrationInput`<sup>Optional</sup> <a name="EventOrchestrationInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestrationInput"></a>

```go
func EventOrchestrationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.setInput"></a>

```go
func SetInput() interface{}
```

- *Type:* interface{}

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestration"></a>

```go
func EventOrchestration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationGlobalCatchAll <a name="EventOrchestrationGlobalCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAll {
	Actions: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | actions block. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.property.actions"></a>

```go
Actions EventOrchestrationGlobalCatchAllActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}

---

### EventOrchestrationGlobalCatchAllActions <a name="EventOrchestrationGlobalCatchAllActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActions {
	Annotate: *string,
	AutomationAction: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction,
	DropEvent: interface{},
	EventAction: *string,
	Extraction: interface{},
	IncidentCustomFieldUpdate: interface{},
	Priority: *string,
	RouteTo: *string,
	Severity: *string,
	Suppress: interface{},
	Suspend: *f64,
	Variable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.annotate">Annotate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.dropEvent">DropEvent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.eventAction">EventAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.extraction">Extraction</a></code> | <code>interface{}</code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code>interface{}</code> | incident_custom_field_update block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.priority">Priority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.routeTo">RouteTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suppress">Suppress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suspend">Suspend</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.variable">Variable</a></code> | <code>interface{}</code> | variable block. |

---

##### `Annotate`<sup>Optional</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.annotate"></a>

```go
Annotate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}.

---

##### `AutomationAction`<sup>Optional</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.automationAction"></a>

```go
AutomationAction EventOrchestrationGlobalCatchAllActionsAutomationAction
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}

---

##### `DropEvent`<sup>Optional</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.dropEvent"></a>

```go
DropEvent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}.

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.eventAction"></a>

```go
EventAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}.

---

##### `Extraction`<sup>Optional</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.extraction"></a>

```go
Extraction interface{}
```

- *Type:* interface{}

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}

---

##### `IncidentCustomFieldUpdate`<sup>Optional</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.incidentCustomFieldUpdate"></a>

```go
IncidentCustomFieldUpdate interface{}
```

- *Type:* interface{}

incident_custom_field_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}.

---

##### `RouteTo`<sup>Optional</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.routeTo"></a>

```go
RouteTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}.

---

##### `Suppress`<sup>Optional</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suppress"></a>

```go
Suppress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}.

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suspend"></a>

```go
Suspend *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.variable"></a>

```go
Variable interface{}
```

- *Type:* interface{}

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}

---

### EventOrchestrationGlobalCatchAllActionsAutomationAction <a name="EventOrchestrationGlobalCatchAllActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActionsAutomationAction {
	Name: *string,
	Url: *string,
	AutoSend: interface{},
	Header: interface{},
	Parameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.autoSend">AutoSend</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}.

---

##### `AutoSend`<sup>Optional</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.autoSend"></a>

```go
AutoSend interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}

---

### EventOrchestrationGlobalCatchAllActionsAutomationActionHeader <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsAutomationActionParameter <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsExtraction <a name="EventOrchestrationGlobalCatchAllActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActionsExtraction {
	Target: *string,
	Regex: *string,
	Source: *string,
	Template: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}.

---

### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate {
	Id: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsVariable <a name="EventOrchestrationGlobalCatchAllActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalCatchAllActionsVariable {
	Name: *string,
	Path: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalConfig <a name="EventOrchestrationGlobalConfig" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CatchAll: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll,
	EventOrchestration: *string,
	Set: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.catchAll">CatchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.eventOrchestration">EventOrchestration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.set">Set</a></code> | <code>interface{}</code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatchAll`<sup>Required</sup> <a name="CatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.catchAll"></a>

```go
CatchAll EventOrchestrationGlobalCatchAll
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#catch_all EventOrchestrationGlobal#catch_all}

---

##### `EventOrchestration`<sup>Required</sup> <a name="EventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.eventOrchestration"></a>

```go
EventOrchestration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}.

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.set"></a>

```go
Set interface{}
```

- *Type:* interface{}

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#set EventOrchestrationGlobal#set}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EventOrchestrationGlobalSet <a name="EventOrchestrationGlobalSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSet {
	Id: *string,
	Rule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#rule EventOrchestrationGlobal#rule}

---

### EventOrchestrationGlobalSetRule <a name="EventOrchestrationGlobalSetRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRule {
	Actions: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions,
	Condition: interface{},
	Disabled: interface{},
	Label: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.condition">Condition</a></code> | <code>interface{}</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.actions"></a>

```go
Actions EventOrchestrationGlobalSetRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.condition"></a>

```go
Condition interface{}
```

- *Type:* interface{}

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#condition EventOrchestrationGlobal#condition}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}.

---

### EventOrchestrationGlobalSetRuleActions <a name="EventOrchestrationGlobalSetRuleActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActions {
	Annotate: *string,
	AutomationAction: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction,
	DropEvent: interface{},
	EventAction: *string,
	Extraction: interface{},
	IncidentCustomFieldUpdate: interface{},
	Priority: *string,
	RouteTo: *string,
	Severity: *string,
	Suppress: interface{},
	Suspend: *f64,
	Variable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.annotate">Annotate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.dropEvent">DropEvent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.eventAction">EventAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.extraction">Extraction</a></code> | <code>interface{}</code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code>interface{}</code> | incident_custom_field_update block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.priority">Priority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.routeTo">RouteTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suppress">Suppress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suspend">Suspend</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.variable">Variable</a></code> | <code>interface{}</code> | variable block. |

---

##### `Annotate`<sup>Optional</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.annotate"></a>

```go
Annotate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}.

---

##### `AutomationAction`<sup>Optional</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.automationAction"></a>

```go
AutomationAction EventOrchestrationGlobalSetRuleActionsAutomationAction
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}

---

##### `DropEvent`<sup>Optional</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.dropEvent"></a>

```go
DropEvent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}.

---

##### `EventAction`<sup>Optional</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.eventAction"></a>

```go
EventAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}.

---

##### `Extraction`<sup>Optional</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.extraction"></a>

```go
Extraction interface{}
```

- *Type:* interface{}

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}

---

##### `IncidentCustomFieldUpdate`<sup>Optional</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.incidentCustomFieldUpdate"></a>

```go
IncidentCustomFieldUpdate interface{}
```

- *Type:* interface{}

incident_custom_field_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.priority"></a>

```go
Priority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}.

---

##### `RouteTo`<sup>Optional</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.routeTo"></a>

```go
RouteTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}.

---

##### `Suppress`<sup>Optional</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suppress"></a>

```go
Suppress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}.

---

##### `Suspend`<sup>Optional</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suspend"></a>

```go
Suspend *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.variable"></a>

```go
Variable interface{}
```

- *Type:* interface{}

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}

---

### EventOrchestrationGlobalSetRuleActionsAutomationAction <a name="EventOrchestrationGlobalSetRuleActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActionsAutomationAction {
	Name: *string,
	Url: *string,
	AutoSend: interface{},
	Header: interface{},
	Parameter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.autoSend">AutoSend</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}.

---

##### `AutoSend`<sup>Optional</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.autoSend"></a>

```go
AutoSend interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}

---

### EventOrchestrationGlobalSetRuleActionsAutomationActionHeader <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsAutomationActionParameter <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsExtraction <a name="EventOrchestrationGlobalSetRuleActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActionsExtraction {
	Target: *string,
	Regex: *string,
	Source: *string,
	Template: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}.

---

### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate {
	Id: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsVariable <a name="EventOrchestrationGlobalSetRuleActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleActionsVariable {
	Name: *string,
	Path: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleCondition <a name="EventOrchestrationGlobalSetRuleCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

&eventorchestrationglobal.EventOrchestrationGlobalSetRuleCondition {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.5/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetAutoSend">ResetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoSend` <a name="ResetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetAutoSend"></a>

```go
func ResetAutoSend()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetParameter"></a>

```go
func ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList">EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList">EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSendInput">AutoSendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSend">AutoSend</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.header"></a>

```go
func Header() EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList">EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameter"></a>

```go
func Parameter() EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList">EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList</a>

---

##### `AutoSendInput`<sup>Optional</sup> <a name="AutoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSendInput"></a>

```go
func AutoSendInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AutoSend`<sup>Required</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSend"></a>

```go
func AutoSend() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() EventOrchestrationGlobalCatchAllActionsAutomationAction
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsAutomationActionParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsExtractionList <a name="EventOrchestrationGlobalCatchAllActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsExtractionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalCatchAllActionsExtractionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalCatchAllActionsExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsExtractionOutputReference <a name="EventOrchestrationGlobalCatchAllActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsExtractionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalCatchAllActionsExtractionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsOutputReference <a name="EventOrchestrationGlobalCatchAllActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventOrchestrationGlobalCatchAllActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction">PutAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction">PutExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate">PutIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAnnotate">ResetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAutomationAction">ResetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetDropEvent">ResetDropEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetExtraction">ResetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetIncidentCustomFieldUpdate">ResetIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetRouteTo">ResetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuppress">ResetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomationAction` <a name="PutAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction"></a>

```go
func PutAutomationAction(value EventOrchestrationGlobalCatchAllActionsAutomationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---

##### `PutExtraction` <a name="PutExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction"></a>

```go
func PutExtraction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncidentCustomFieldUpdate` <a name="PutIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate"></a>

```go
func PutIncidentCustomFieldUpdate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable"></a>

```go
func PutVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotate` <a name="ResetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAnnotate"></a>

```go
func ResetAnnotate()
```

##### `ResetAutomationAction` <a name="ResetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAutomationAction"></a>

```go
func ResetAutomationAction()
```

##### `ResetDropEvent` <a name="ResetDropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetDropEvent"></a>

```go
func ResetDropEvent()
```

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEventAction"></a>

```go
func ResetEventAction()
```

##### `ResetExtraction` <a name="ResetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetExtraction"></a>

```go
func ResetExtraction()
```

##### `ResetIncidentCustomFieldUpdate` <a name="ResetIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetIncidentCustomFieldUpdate"></a>

```go
func ResetIncidentCustomFieldUpdate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRouteTo` <a name="ResetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetRouteTo"></a>

```go
func ResetRouteTo()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetSuppress` <a name="ResetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuppress"></a>

```go
func ResetSuppress()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuspend"></a>

```go
func ResetSuspend()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetVariable"></a>

```go
func ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference">EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extraction">Extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList">EventOrchestrationGlobalCatchAllActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList">EventOrchestrationGlobalCatchAllActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotateInput">AnnotateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationActionInput">AutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEventInput">DropEventInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extractionInput">ExtractionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdateInput">IncidentCustomFieldUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeToInput">RouteToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppressInput">SuppressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspendInput">SuspendInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variableInput">VariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotate">Annotate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEvent">DropEvent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventAction">EventAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeTo">RouteTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppress">Suppress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspend">Suspend</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomationAction`<sup>Required</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationAction"></a>

```go
func AutomationAction() EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference">EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference</a>

---

##### `Extraction`<sup>Required</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extraction"></a>

```go
func Extraction() EventOrchestrationGlobalCatchAllActionsExtractionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList">EventOrchestrationGlobalCatchAllActionsExtractionList</a>

---

##### `IncidentCustomFieldUpdate`<sup>Required</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdate"></a>

```go
func IncidentCustomFieldUpdate() EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variable"></a>

```go
func Variable() EventOrchestrationGlobalCatchAllActionsVariableList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList">EventOrchestrationGlobalCatchAllActionsVariableList</a>

---

##### `AnnotateInput`<sup>Optional</sup> <a name="AnnotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotateInput"></a>

```go
func AnnotateInput() *string
```

- *Type:* *string

---

##### `AutomationActionInput`<sup>Optional</sup> <a name="AutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationActionInput"></a>

```go
func AutomationActionInput() EventOrchestrationGlobalCatchAllActionsAutomationAction
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---

##### `DropEventInput`<sup>Optional</sup> <a name="DropEventInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEventInput"></a>

```go
func DropEventInput() interface{}
```

- *Type:* interface{}

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventActionInput"></a>

```go
func EventActionInput() *string
```

- *Type:* *string

---

##### `ExtractionInput`<sup>Optional</sup> <a name="ExtractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extractionInput"></a>

```go
func ExtractionInput() interface{}
```

- *Type:* interface{}

---

##### `IncidentCustomFieldUpdateInput`<sup>Optional</sup> <a name="IncidentCustomFieldUpdateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdateInput"></a>

```go
func IncidentCustomFieldUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `RouteToInput`<sup>Optional</sup> <a name="RouteToInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeToInput"></a>

```go
func RouteToInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `SuppressInput`<sup>Optional</sup> <a name="SuppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppressInput"></a>

```go
func SuppressInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspendInput"></a>

```go
func SuspendInput() *f64
```

- *Type:* *f64

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variableInput"></a>

```go
func VariableInput() interface{}
```

- *Type:* interface{}

---

##### `Annotate`<sup>Required</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotate"></a>

```go
func Annotate() *string
```

- *Type:* *string

---

##### `DropEvent`<sup>Required</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEvent"></a>

```go
func DropEvent() interface{}
```

- *Type:* interface{}

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventAction"></a>

```go
func EventAction() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeTo"></a>

```go
func RouteTo() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Suppress`<sup>Required</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppress"></a>

```go
func Suppress() interface{}
```

- *Type:* interface{}

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspend"></a>

```go
func Suspend() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() EventOrchestrationGlobalCatchAllActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---


### EventOrchestrationGlobalCatchAllActionsVariableList <a name="EventOrchestrationGlobalCatchAllActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalCatchAllActionsVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalCatchAllActionsVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllActionsVariableOutputReference <a name="EventOrchestrationGlobalCatchAllActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllActionsVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalCatchAllActionsVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalCatchAllOutputReference <a name="EventOrchestrationGlobalCatchAllOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalCatchAllOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventOrchestrationGlobalCatchAllOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions">PutActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions"></a>

```go
func PutActions(value EventOrchestrationGlobalCatchAllActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference">EventOrchestrationGlobalCatchAllActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actions"></a>

```go
func Actions() EventOrchestrationGlobalCatchAllActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference">EventOrchestrationGlobalCatchAllActionsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actionsInput"></a>

```go
func ActionsInput() EventOrchestrationGlobalCatchAllActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.internalValue"></a>

```go
func InternalValue() EventOrchestrationGlobalCatchAll
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---


### EventOrchestrationGlobalSetList <a name="EventOrchestrationGlobalSetList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetOutputReference <a name="EventOrchestrationGlobalSetOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resetRule"></a>

```go
func ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList">EventOrchestrationGlobalSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.rule"></a>

```go
func Rule() EventOrchestrationGlobalSetRuleList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList">EventOrchestrationGlobalSetRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetAutoSend">ResetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoSend` <a name="ResetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetAutoSend"></a>

```go
func ResetAutoSend()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetParameter"></a>

```go
func ResetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList">EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList">EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSendInput">AutoSendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSend">AutoSend</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.header"></a>

```go
func Header() EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList">EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList</a>

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameter"></a>

```go
func Parameter() EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList">EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList</a>

---

##### `AutoSendInput`<sup>Optional</sup> <a name="AutoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSendInput"></a>

```go
func AutoSendInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AutoSend`<sup>Required</sup> <a name="AutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSend"></a>

```go
func AutoSend() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() EventOrchestrationGlobalSetRuleActionsAutomationAction
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsAutomationActionParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsExtractionList <a name="EventOrchestrationGlobalSetRuleActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsExtractionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleActionsExtractionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleActionsExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsExtractionOutputReference <a name="EventOrchestrationGlobalSetRuleActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsExtractionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleActionsExtractionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsOutputReference <a name="EventOrchestrationGlobalSetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventOrchestrationGlobalSetRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction">PutAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction">PutExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate">PutIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAnnotate">ResetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAutomationAction">ResetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetDropEvent">ResetDropEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEventAction">ResetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetExtraction">ResetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetIncidentCustomFieldUpdate">ResetIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetRouteTo">ResetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuppress">ResetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuspend">ResetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomationAction` <a name="PutAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction"></a>

```go
func PutAutomationAction(value EventOrchestrationGlobalSetRuleActionsAutomationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---

##### `PutExtraction` <a name="PutExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction"></a>

```go
func PutExtraction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncidentCustomFieldUpdate` <a name="PutIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate"></a>

```go
func PutIncidentCustomFieldUpdate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable"></a>

```go
func PutVariable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotate` <a name="ResetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAnnotate"></a>

```go
func ResetAnnotate()
```

##### `ResetAutomationAction` <a name="ResetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAutomationAction"></a>

```go
func ResetAutomationAction()
```

##### `ResetDropEvent` <a name="ResetDropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetDropEvent"></a>

```go
func ResetDropEvent()
```

##### `ResetEventAction` <a name="ResetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEventAction"></a>

```go
func ResetEventAction()
```

##### `ResetExtraction` <a name="ResetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetExtraction"></a>

```go
func ResetExtraction()
```

##### `ResetIncidentCustomFieldUpdate` <a name="ResetIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetIncidentCustomFieldUpdate"></a>

```go
func ResetIncidentCustomFieldUpdate()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetRouteTo` <a name="ResetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetRouteTo"></a>

```go
func ResetRouteTo()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetSuppress` <a name="ResetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuppress"></a>

```go
func ResetSuppress()
```

##### `ResetSuspend` <a name="ResetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuspend"></a>

```go
func ResetSuspend()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetVariable"></a>

```go
func ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationAction">AutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference">EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extraction">Extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList">EventOrchestrationGlobalSetRuleActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdate">IncidentCustomFieldUpdate</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList">EventOrchestrationGlobalSetRuleActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotateInput">AnnotateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationActionInput">AutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEventInput">DropEventInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventActionInput">EventActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extractionInput">ExtractionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdateInput">IncidentCustomFieldUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeToInput">RouteToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppressInput">SuppressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspendInput">SuspendInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variableInput">VariableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotate">Annotate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEvent">DropEvent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventAction">EventAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeTo">RouteTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppress">Suppress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspend">Suspend</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomationAction`<sup>Required</sup> <a name="AutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationAction"></a>

```go
func AutomationAction() EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference">EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference</a>

---

##### `Extraction`<sup>Required</sup> <a name="Extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extraction"></a>

```go
func Extraction() EventOrchestrationGlobalSetRuleActionsExtractionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList">EventOrchestrationGlobalSetRuleActionsExtractionList</a>

---

##### `IncidentCustomFieldUpdate`<sup>Required</sup> <a name="IncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdate"></a>

```go
func IncidentCustomFieldUpdate() EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variable"></a>

```go
func Variable() EventOrchestrationGlobalSetRuleActionsVariableList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList">EventOrchestrationGlobalSetRuleActionsVariableList</a>

---

##### `AnnotateInput`<sup>Optional</sup> <a name="AnnotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotateInput"></a>

```go
func AnnotateInput() *string
```

- *Type:* *string

---

##### `AutomationActionInput`<sup>Optional</sup> <a name="AutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationActionInput"></a>

```go
func AutomationActionInput() EventOrchestrationGlobalSetRuleActionsAutomationAction
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---

##### `DropEventInput`<sup>Optional</sup> <a name="DropEventInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEventInput"></a>

```go
func DropEventInput() interface{}
```

- *Type:* interface{}

---

##### `EventActionInput`<sup>Optional</sup> <a name="EventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventActionInput"></a>

```go
func EventActionInput() *string
```

- *Type:* *string

---

##### `ExtractionInput`<sup>Optional</sup> <a name="ExtractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extractionInput"></a>

```go
func ExtractionInput() interface{}
```

- *Type:* interface{}

---

##### `IncidentCustomFieldUpdateInput`<sup>Optional</sup> <a name="IncidentCustomFieldUpdateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdateInput"></a>

```go
func IncidentCustomFieldUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *string
```

- *Type:* *string

---

##### `RouteToInput`<sup>Optional</sup> <a name="RouteToInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeToInput"></a>

```go
func RouteToInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `SuppressInput`<sup>Optional</sup> <a name="SuppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppressInput"></a>

```go
func SuppressInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendInput`<sup>Optional</sup> <a name="SuspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspendInput"></a>

```go
func SuspendInput() *f64
```

- *Type:* *f64

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variableInput"></a>

```go
func VariableInput() interface{}
```

- *Type:* interface{}

---

##### `Annotate`<sup>Required</sup> <a name="Annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotate"></a>

```go
func Annotate() *string
```

- *Type:* *string

---

##### `DropEvent`<sup>Required</sup> <a name="DropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEvent"></a>

```go
func DropEvent() interface{}
```

- *Type:* interface{}

---

##### `EventAction`<sup>Required</sup> <a name="EventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventAction"></a>

```go
func EventAction() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `RouteTo`<sup>Required</sup> <a name="RouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeTo"></a>

```go
func RouteTo() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Suppress`<sup>Required</sup> <a name="Suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppress"></a>

```go
func Suppress() interface{}
```

- *Type:* interface{}

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspend"></a>

```go
func Suspend() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() EventOrchestrationGlobalSetRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---


### EventOrchestrationGlobalSetRuleActionsVariableList <a name="EventOrchestrationGlobalSetRuleActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsVariableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleActionsVariableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleActionsVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleActionsVariableOutputReference <a name="EventOrchestrationGlobalSetRuleActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleActionsVariableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleActionsVariableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleConditionList <a name="EventOrchestrationGlobalSetRuleConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleConditionOutputReference <a name="EventOrchestrationGlobalSetRuleConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleList <a name="EventOrchestrationGlobalSetRuleList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventOrchestrationGlobalSetRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get"></a>

```go
func Get(index *f64) EventOrchestrationGlobalSetRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventOrchestrationGlobalSetRuleOutputReference <a name="EventOrchestrationGlobalSetRuleOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/eventorchestrationglobal"

eventorchestrationglobal.NewEventOrchestrationGlobalSetRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventOrchestrationGlobalSetRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActions` <a name="PutActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions"></a>

```go
func PutActions(value EventOrchestrationGlobalSetRuleActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition"></a>

```go
func PutCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetLabel"></a>

```go
func ResetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference">EventOrchestrationGlobalSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList">EventOrchestrationGlobalSetRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actionsInput">ActionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.conditionInput">ConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actions"></a>

```go
func Actions() EventOrchestrationGlobalSetRuleActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference">EventOrchestrationGlobalSetRuleActionsOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.condition"></a>

```go
func Condition() EventOrchestrationGlobalSetRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList">EventOrchestrationGlobalSetRuleConditionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actionsInput"></a>

```go
func ActionsInput() EventOrchestrationGlobalSetRuleActions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.conditionInput"></a>

```go
func ConditionInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



