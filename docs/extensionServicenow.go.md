# `extensionServicenow` Submodule <a name="`extensionServicenow` Submodule" id="@cdktf/provider-pagerduty.extensionServicenow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExtensionServicenow <a name="ExtensionServicenow" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow pagerduty_extension_servicenow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/extensionservicenow"

extensionservicenow.NewExtensionServicenow(scope Construct, id *string, config ExtensionServicenowConfig) ExtensionServicenow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig">ExtensionServicenowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig">ExtensionServicenowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl">ResetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEndpointUrl` <a name="ResetEndpointUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetEndpointUrl"></a>

```go
func ResetEndpointUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetName"></a>

```go
func ResetName()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExtensionServicenow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/extensionservicenow"

extensionservicenow.ExtensionServicenow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/extensionservicenow"

extensionservicenow.ExtensionServicenow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/extensionservicenow"

extensionservicenow.ExtensionServicenow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/extensionservicenow"

extensionservicenow.ExtensionServicenow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ExtensionServicenow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ExtensionServicenow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ExtensionServicenow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ExtensionServicenow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput">EndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput">ExtensionObjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput">ExtensionSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput">RefererInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput">SnowPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput">SnowUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput">SyncOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput">TaskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects">ExtensionObjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema">ExtensionSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer">Referer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword">SnowPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser">SnowUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions">SyncOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType">TaskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EndpointUrlInput`<sup>Optional</sup> <a name="EndpointUrlInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrlInput"></a>

```go
func EndpointUrlInput() *string
```

- *Type:* *string

---

##### `ExtensionObjectsInput`<sup>Optional</sup> <a name="ExtensionObjectsInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjectsInput"></a>

```go
func ExtensionObjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExtensionSchemaInput`<sup>Optional</sup> <a name="ExtensionSchemaInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchemaInput"></a>

```go
func ExtensionSchemaInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefererInput`<sup>Optional</sup> <a name="RefererInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.refererInput"></a>

```go
func RefererInput() *string
```

- *Type:* *string

---

##### `SnowPasswordInput`<sup>Optional</sup> <a name="SnowPasswordInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPasswordInput"></a>

```go
func SnowPasswordInput() *string
```

- *Type:* *string

---

##### `SnowUserInput`<sup>Optional</sup> <a name="SnowUserInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUserInput"></a>

```go
func SnowUserInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `SyncOptionsInput`<sup>Optional</sup> <a name="SyncOptionsInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptionsInput"></a>

```go
func SyncOptionsInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskTypeInput"></a>

```go
func TaskTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `ExtensionObjects`<sup>Required</sup> <a name="ExtensionObjects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionObjects"></a>

```go
func ExtensionObjects() *[]*string
```

- *Type:* *[]*string

---

##### `ExtensionSchema`<sup>Required</sup> <a name="ExtensionSchema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.extensionSchema"></a>

```go
func ExtensionSchema() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Referer`<sup>Required</sup> <a name="Referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.referer"></a>

```go
func Referer() *string
```

- *Type:* *string

---

##### `SnowPassword`<sup>Required</sup> <a name="SnowPassword" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowPassword"></a>

```go
func SnowPassword() *string
```

- *Type:* *string

---

##### `SnowUser`<sup>Required</sup> <a name="SnowUser" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.snowUser"></a>

```go
func SnowUser() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `SyncOptions`<sup>Required</sup> <a name="SyncOptions" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.syncOptions"></a>

```go
func SyncOptions() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.taskType"></a>

```go
func TaskType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExtensionServicenowConfig <a name="ExtensionServicenowConfig" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/extensionservicenow"

&extensionservicenow.ExtensionServicenowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionObjects: *[]*string,
	ExtensionSchema: *string,
	Referer: *string,
	SnowPassword: *string,
	SnowUser: *string,
	SyncOptions: *string,
	Target: *string,
	TaskType: *string,
	EndpointUrl: *string,
	Name: *string,
	Summary: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects">ExtensionObjects</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema">ExtensionSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer">Referer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword">SnowPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser">SnowUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions">SyncOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#target ExtensionServicenow#target}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType">TaskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#name ExtensionServicenow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#type ExtensionServicenow#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionObjects`<sup>Required</sup> <a name="ExtensionObjects" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionObjects"></a>

```go
ExtensionObjects *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#extension_objects ExtensionServicenow#extension_objects}.

---

##### `ExtensionSchema`<sup>Required</sup> <a name="ExtensionSchema" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.extensionSchema"></a>

```go
ExtensionSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#extension_schema ExtensionServicenow#extension_schema}.

---

##### `Referer`<sup>Required</sup> <a name="Referer" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.referer"></a>

```go
Referer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#referer ExtensionServicenow#referer}.

---

##### `SnowPassword`<sup>Required</sup> <a name="SnowPassword" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowPassword"></a>

```go
SnowPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#snow_password ExtensionServicenow#snow_password}.

---

##### `SnowUser`<sup>Required</sup> <a name="SnowUser" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.snowUser"></a>

```go
SnowUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#snow_user ExtensionServicenow#snow_user}.

---

##### `SyncOptions`<sup>Required</sup> <a name="SyncOptions" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.syncOptions"></a>

```go
SyncOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#sync_options ExtensionServicenow#sync_options}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#target ExtensionServicenow#target}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.taskType"></a>

```go
TaskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#task_type ExtensionServicenow#task_type}.

---

##### `EndpointUrl`<sup>Optional</sup> <a name="EndpointUrl" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.endpointUrl"></a>

```go
EndpointUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#endpoint_url ExtensionServicenow#endpoint_url}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#name ExtensionServicenow#name}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#summary ExtensionServicenow#summary}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.extensionServicenow.ExtensionServicenowConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.7/docs/resources/extension_servicenow#type ExtensionServicenow#type}.

---



