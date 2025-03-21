# `automationActionsRunnerTeamAssociation` Submodule <a name="`automationActionsRunnerTeamAssociation` Submodule" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsRunnerTeamAssociation <a name="AutomationActionsRunnerTeamAssociation" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association pagerduty_automation_actions_runner_team_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunnerteamassociation"

automationactionsrunnerteamassociation.NewAutomationActionsRunnerTeamAssociation(scope Construct, id *string, config AutomationActionsRunnerTeamAssociationConfig) AutomationActionsRunnerTeamAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig">AutomationActionsRunnerTeamAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig">AutomationActionsRunnerTeamAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationActionsRunnerTeamAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunnerteamassociation"

automationactionsrunnerteamassociation.AutomationActionsRunnerTeamAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunnerteamassociation"

automationactionsrunnerteamassociation.AutomationActionsRunnerTeamAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunnerteamassociation"

automationactionsrunnerteamassociation.AutomationActionsRunnerTeamAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunnerteamassociation"

automationactionsrunnerteamassociation.AutomationActionsRunnerTeamAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutomationActionsRunnerTeamAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutomationActionsRunnerTeamAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutomationActionsRunnerTeamAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutomationActionsRunnerTeamAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerIdInput">RunnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerId">RunnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RunnerIdInput`<sup>Optional</sup> <a name="RunnerIdInput" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerIdInput"></a>

```go
func RunnerIdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RunnerId`<sup>Required</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerId"></a>

```go
func RunnerId() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsRunnerTeamAssociationConfig <a name="AutomationActionsRunnerTeamAssociationConfig" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/automationactionsrunnerteamassociation"

&automationactionsrunnerteamassociation.AutomationActionsRunnerTeamAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	RunnerId: *string,
	TeamId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.runnerId">RunnerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RunnerId`<sup>Required</sup> <a name="RunnerId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.runnerId"></a>

```go
RunnerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.23.1/docs/resources/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



