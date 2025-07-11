# `userHandoffNotificationRule` Submodule <a name="`userHandoffNotificationRule` Submodule" id="@cdktf/provider-pagerduty.userHandoffNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserHandoffNotificationRule <a name="UserHandoffNotificationRule" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule pagerduty_user_handoff_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.NewUserHandoffNotificationRule(scope Construct, id *string, config UserHandoffNotificationRuleConfig) UserHandoffNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig">UserHandoffNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig">UserHandoffNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod">PutContactMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetContactMethod">ResetContactMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetHandoffType">ResetHandoffType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContactMethod` <a name="PutContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod"></a>

```go
func PutContactMethod(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContactMethod` <a name="ResetContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetContactMethod"></a>

```go
func ResetContactMethod()
```

##### `ResetHandoffType` <a name="ResetHandoffType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetHandoffType"></a>

```go
func ResetHandoffType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UserHandoffNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.UserHandoffNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.UserHandoffNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.UserHandoffNotificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.UserHandoffNotificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a UserHandoffNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the UserHandoffNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing UserHandoffNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the UserHandoffNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethod">ContactMethod</a></code> | <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList">UserHandoffNotificationRuleContactMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethodInput">ContactMethodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffTypeInput">HandoffTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutesInput">NotifyAdvanceInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffType">HandoffType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutes">NotifyAdvanceInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactMethod`<sup>Required</sup> <a name="ContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethod"></a>

```go
func ContactMethod() UserHandoffNotificationRuleContactMethodList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList">UserHandoffNotificationRuleContactMethodList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ContactMethodInput`<sup>Optional</sup> <a name="ContactMethodInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethodInput"></a>

```go
func ContactMethodInput() interface{}
```

- *Type:* interface{}

---

##### `HandoffTypeInput`<sup>Optional</sup> <a name="HandoffTypeInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffTypeInput"></a>

```go
func HandoffTypeInput() *string
```

- *Type:* *string

---

##### `NotifyAdvanceInMinutesInput`<sup>Optional</sup> <a name="NotifyAdvanceInMinutesInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutesInput"></a>

```go
func NotifyAdvanceInMinutesInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `HandoffType`<sup>Required</sup> <a name="HandoffType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffType"></a>

```go
func HandoffType() *string
```

- *Type:* *string

---

##### `NotifyAdvanceInMinutes`<sup>Required</sup> <a name="NotifyAdvanceInMinutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutes"></a>

```go
func NotifyAdvanceInMinutes() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserHandoffNotificationRuleConfig <a name="UserHandoffNotificationRuleConfig" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

&userhandoffnotificationrule.UserHandoffNotificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NotifyAdvanceInMinutes: *f64,
	UserId: *string,
	ContactMethod: interface{},
	HandoffType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.notifyAdvanceInMinutes">NotifyAdvanceInMinutes</a></code> | <code>*f64</code> | The number of minutes before the handoff to notify the user. Must be greater than or equal to 0. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.contactMethod">ContactMethod</a></code> | <code>interface{}</code> | contact_method block. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.handoffType">HandoffType</a></code> | <code>*string</code> | The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotifyAdvanceInMinutes`<sup>Required</sup> <a name="NotifyAdvanceInMinutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.notifyAdvanceInMinutes"></a>

```go
NotifyAdvanceInMinutes *f64
```

- *Type:* *f64

The number of minutes before the handoff to notify the user. Must be greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#notify_advance_in_minutes UserHandoffNotificationRule#notify_advance_in_minutes}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}.

---

##### `ContactMethod`<sup>Optional</sup> <a name="ContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.contactMethod"></a>

```go
ContactMethod interface{}
```

- *Type:* interface{}

contact_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#contact_method UserHandoffNotificationRule#contact_method}

---

##### `HandoffType`<sup>Optional</sup> <a name="HandoffType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.handoffType"></a>

```go
HandoffType *string
```

- *Type:* *string

The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#handoff_type UserHandoffNotificationRule#handoff_type}

---

### UserHandoffNotificationRuleContactMethod <a name="UserHandoffNotificationRuleContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

&userhandoffnotificationrule.UserHandoffNotificationRuleContactMethod {
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.type">Type</a></code> | <code>*string</code> | The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.0/docs/resources/user_handoff_notification_rule#type UserHandoffNotificationRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### UserHandoffNotificationRuleContactMethodList <a name="UserHandoffNotificationRuleContactMethodList" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.NewUserHandoffNotificationRuleContactMethodList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserHandoffNotificationRuleContactMethodList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get"></a>

```go
func Get(index *f64) UserHandoffNotificationRuleContactMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserHandoffNotificationRuleContactMethodOutputReference <a name="UserHandoffNotificationRuleContactMethodOutputReference" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/userhandoffnotificationrule"

userhandoffnotificationrule.NewUserHandoffNotificationRuleContactMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserHandoffNotificationRuleContactMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



