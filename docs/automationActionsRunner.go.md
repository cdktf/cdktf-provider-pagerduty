# `automationActionsRunner` Submodule <a name="`automationActionsRunner` Submodule" id="@cdktf/provider-pagerduty.automationActionsRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsRunner <a name="AutomationActionsRunner" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner pagerduty_automation_actions_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunner"

automationactionsrunner.NewAutomationActionsRunner(scope Construct, id *string, config AutomationActionsRunnerConfig) AutomationActionsRunner
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig">AutomationActionsRunnerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig">AutomationActionsRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetLastSeen">ResetLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookApiKey">ResetRunbookApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookBaseUri">ResetRunbookBaseUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetId"></a>

```go
func ResetId()
```

##### `ResetLastSeen` <a name="ResetLastSeen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetLastSeen"></a>

```go
func ResetLastSeen()
```

##### `ResetRunbookApiKey` <a name="ResetRunbookApiKey" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookApiKey"></a>

```go
func ResetRunbookApiKey()
```

##### `ResetRunbookBaseUri` <a name="ResetRunbookBaseUri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookBaseUri"></a>

```go
func ResetRunbookBaseUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationActionsRunner resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunner"

automationactionsrunner.AutomationActionsRunner_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunner"

automationactionsrunner.AutomationActionsRunner_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunner"

automationactionsrunner.AutomationActionsRunner_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunner"

automationactionsrunner.AutomationActionsRunner_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationActionsRunner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationActionsRunner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationActionsRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationActionsRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeenInput">LastSeenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKeyInput">RunbookApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUriInput">RunbookBaseUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerTypeInput">RunnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeen">LastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKey">RunbookApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUri">RunbookBaseUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerType">RunnerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastSeenInput`<sup>Optional</sup> <a name="LastSeenInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeenInput"></a>

```go
func LastSeenInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RunbookApiKeyInput`<sup>Optional</sup> <a name="RunbookApiKeyInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKeyInput"></a>

```go
func RunbookApiKeyInput() *string
```

- *Type:* *string

---

##### `RunbookBaseUriInput`<sup>Optional</sup> <a name="RunbookBaseUriInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUriInput"></a>

```go
func RunbookBaseUriInput() *string
```

- *Type:* *string

---

##### `RunnerTypeInput`<sup>Optional</sup> <a name="RunnerTypeInput" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerTypeInput"></a>

```go
func RunnerTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeen"></a>

```go
func LastSeen() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RunbookApiKey`<sup>Required</sup> <a name="RunbookApiKey" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKey"></a>

```go
func RunbookApiKey() *string
```

- *Type:* *string

---

##### `RunbookBaseUri`<sup>Required</sup> <a name="RunbookBaseUri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUri"></a>

```go
func RunbookBaseUri() *string
```

- *Type:* *string

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerType"></a>

```go
func RunnerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsRunnerConfig <a name="AutomationActionsRunnerConfig" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunner"

&automationactionsrunner.AutomationActionsRunnerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RunnerType: *string,
	Description: *string,
	Id: *string,
	LastSeen: *string,
	RunbookApiKey: *string,
	RunbookBaseUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runnerType">RunnerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lastSeen">LastSeen</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookApiKey">RunbookApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookBaseUri">RunbookBaseUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}.

---

##### `RunnerType`<sup>Required</sup> <a name="RunnerType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runnerType"></a>

```go
RunnerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastSeen`<sup>Optional</sup> <a name="LastSeen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lastSeen"></a>

```go
LastSeen *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}.

---

##### `RunbookApiKey`<sup>Optional</sup> <a name="RunbookApiKey" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookApiKey"></a>

```go
RunbookApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}.

---

##### `RunbookBaseUri`<sup>Optional</sup> <a name="RunbookBaseUri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookBaseUri"></a>

```go
RunbookBaseUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.14.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}.

---



