# `serviceCustomField` Submodule <a name="`serviceCustomField` Submodule" id="@cdktf/provider-pagerduty.serviceCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomField <a name="ServiceCustomField" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field pagerduty_service_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.NewServiceCustomField(scope Construct, id *string, config ServiceCustomFieldConfig) ServiceCustomField
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig">ServiceCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig">ServiceCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption">PutFieldOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetFieldOption">ResetFieldOption</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFieldOption` <a name="PutFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption"></a>

```go
func PutFieldOption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFieldOption` <a name="ResetFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetFieldOption"></a>

```go
func ResetFieldOption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.ServiceCustomField_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.ServiceCustomField_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.ServiceCustomField_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.ServiceCustomField_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOption">FieldOption</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList">ServiceCustomFieldFieldOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOptionInput">FieldOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldTypeInput">FieldTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldType">FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FieldOption`<sup>Required</sup> <a name="FieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOption"></a>

```go
func FieldOption() ServiceCustomFieldFieldOptionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList">ServiceCustomFieldFieldOptionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FieldOptionInput`<sup>Optional</sup> <a name="FieldOptionInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOptionInput"></a>

```go
func FieldOptionInput() interface{}
```

- *Type:* interface{}

---

##### `FieldTypeInput`<sup>Optional</sup> <a name="FieldTypeInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldTypeInput"></a>

```go
func FieldTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldType"></a>

```go
func FieldType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomFieldConfig <a name="ServiceCustomFieldConfig" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

&servicecustomfield.ServiceCustomFieldConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataType: *string,
	DisplayName: *string,
	FieldType: *string,
	Name: *string,
	DefaultValue: *string,
	Description: *string,
	Enabled: interface{},
	FieldOption: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dataType">DataType</a></code> | <code>*string</code> | The kind of data the custom field is allowed to contain. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the field. This must be unique across an account. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldType">FieldType</a></code> | <code>*string</code> | The type of data this field contains. In combination with the `data_type` field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.name">Name</a></code> | <code>*string</code> | The name of the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Default value for the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.description">Description</a></code> | <code>*string</code> | A description of the data this field contains. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the field is enabled. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldOption">FieldOption</a></code> | <code>interface{}</code> | field_option block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

The kind of data the custom field is allowed to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#display_name ServiceCustomField#display_name}

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldType"></a>

```go
FieldType *string
```

- *Type:* *string

The type of data this field contains. In combination with the `data_type` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#field_type ServiceCustomField#field_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the field.

May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#name ServiceCustomField#name}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Default value for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#default_value ServiceCustomField#default_value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the data this field contains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#description ServiceCustomField#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the field is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#enabled ServiceCustomField#enabled}

---

##### `FieldOption`<sup>Optional</sup> <a name="FieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldOption"></a>

```go
FieldOption interface{}
```

- *Type:* interface{}

field_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#field_option ServiceCustomField#field_option}

---

### ServiceCustomFieldFieldOption <a name="ServiceCustomFieldFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

&servicecustomfield.ServiceCustomFieldFieldOption {
	DataType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#value ServiceCustomField#value}. |

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.1/docs/resources/service_custom_field#value ServiceCustomField#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCustomFieldFieldOptionList <a name="ServiceCustomFieldFieldOptionList" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.NewServiceCustomFieldFieldOptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceCustomFieldFieldOptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get"></a>

```go
func Get(index *f64) ServiceCustomFieldFieldOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceCustomFieldFieldOptionOutputReference <a name="ServiceCustomFieldFieldOptionOutputReference" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/servicecustomfield"

servicecustomfield.NewServiceCustomFieldFieldOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceCustomFieldFieldOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



