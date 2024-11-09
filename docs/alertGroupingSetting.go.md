# `alertGroupingSetting` Submodule <a name="`alertGroupingSetting` Submodule" id="@cdktf/provider-pagerduty.alertGroupingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertGroupingSetting <a name="AlertGroupingSetting" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting pagerduty_alert_grouping_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

alertgroupingsetting.NewAlertGroupingSetting(scope Construct, id *string, config AlertGroupingSettingConfig) AlertGroupingSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig">AlertGroupingSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig">AlertGroupingSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig"></a>

```go
func PutConfig(value AlertGroupingSettingConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

alertgroupingsetting.AlertGroupingSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

alertgroupingsetting.AlertGroupingSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

alertgroupingsetting.AlertGroupingSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

alertgroupingsetting.AlertGroupingSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertGroupingSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertGroupingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlertGroupingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference">AlertGroupingSettingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.config"></a>

```go
func Config() AlertGroupingSettingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference">AlertGroupingSettingConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertGroupingSettingConfig <a name="AlertGroupingSettingConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

&alertgroupingsetting.AlertGroupingSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Services: *[]*string,
	Type: *string,
	Config: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.alertGroupingSetting.AlertGroupingSettingConfigA,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.services">Services</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}.

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.config"></a>

```go
Config AlertGroupingSettingConfigA
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#config AlertGroupingSetting#config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}.

---

### AlertGroupingSettingConfigA <a name="AlertGroupingSettingConfigA" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

&alertgroupingsetting.AlertGroupingSettingConfigA {
	Aggregate: *string,
	Fields: *[]*string,
	Timeout: *f64,
	TimeWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.aggregate">Aggregate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeWindow">TimeWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}. |

---

##### `Aggregate`<sup>Optional</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.aggregate"></a>

```go
Aggregate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}.

---

##### `TimeWindow`<sup>Optional</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeWindow"></a>

```go
TimeWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertGroupingSettingConfigAOutputReference <a name="AlertGroupingSettingConfigAOutputReference" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/alertgroupingsetting"

alertgroupingsetting.NewAlertGroupingSettingConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertGroupingSettingConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetAggregate">ResetAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeWindow">ResetTimeWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregate` <a name="ResetAggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetAggregate"></a>

```go
func ResetAggregate()
```

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTimeWindow` <a name="ResetTimeWindow" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeWindow"></a>

```go
func ResetTimeWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregateInput">AggregateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindowInput">TimeWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregate">Aggregate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindow">TimeWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregateInput`<sup>Optional</sup> <a name="AggregateInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregateInput"></a>

```go
func AggregateInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindowInput"></a>

```go
func TimeWindowInput() *f64
```

- *Type:* *f64

---

##### `Aggregate`<sup>Required</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregate"></a>

```go
func Aggregate() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindow"></a>

```go
func TimeWindow() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



