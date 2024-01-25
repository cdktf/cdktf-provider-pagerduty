# `incidentCustomFieldOption` Submodule <a name="`incidentCustomFieldOption` Submodule" id="@cdktf/provider-pagerduty.incidentCustomFieldOption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentCustomFieldOption <a name="IncidentCustomFieldOption" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option pagerduty_incident_custom_field_option}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/incidentcustomfieldoption"

incidentcustomfieldoption.NewIncidentCustomFieldOption(scope Construct, id *string, config IncidentCustomFieldOptionConfig) IncidentCustomFieldOption
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig">IncidentCustomFieldOptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig">IncidentCustomFieldOptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentCustomFieldOption resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/incidentcustomfieldoption"

incidentcustomfieldoption.IncidentCustomFieldOption_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/incidentcustomfieldoption"

incidentcustomfieldoption.IncidentCustomFieldOption_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/incidentcustomfieldoption"

incidentcustomfieldoption.IncidentCustomFieldOption_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/incidentcustomfieldoption"

incidentcustomfieldoption.IncidentCustomFieldOption_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IncidentCustomFieldOption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IncidentCustomFieldOption to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IncidentCustomFieldOption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IncidentCustomFieldOption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOption.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentCustomFieldOptionConfig <a name="IncidentCustomFieldOptionConfig" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/incidentcustomfieldoption"

&incidentcustomfieldoption.IncidentCustomFieldOptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataType: *string,
	Field: *string,
	Value: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#data_type IncidentCustomFieldOption#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.field">Field</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#field IncidentCustomFieldOption#field}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#value IncidentCustomFieldOption#value}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#id IncidentCustomFieldOption#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#data_type IncidentCustomFieldOption#data_type}.

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.field"></a>

```go
Field *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#field IncidentCustomFieldOption#field}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#value IncidentCustomFieldOption#value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.incidentCustomFieldOption.IncidentCustomFieldOptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.5.1/docs/resources/incident_custom_field_option#id IncidentCustomFieldOption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



