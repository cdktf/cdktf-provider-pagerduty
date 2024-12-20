# `serviceIntegration` Submodule <a name="`serviceIntegration` Submodule" id="@cdktf/provider-pagerduty.serviceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceIntegration <a name="ServiceIntegration" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration pagerduty_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegration(scope Construct, id *string, config ServiceIntegrationConfig) ServiceIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig">ServiceIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig">ServiceIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter">PutEmailFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser">PutEmailParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter">ResetEmailFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode">ResetEmailFilterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation">ResetEmailIncidentCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser">ResetEmailParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback">ResetEmailParsingFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail">ResetIntegrationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey">ResetIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor">ResetVendor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailFilter` <a name="PutEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter"></a>

```go
func PutEmailFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEmailParser` <a name="PutEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser"></a>

```go
func PutEmailParser(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.putEmailParser.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmailFilter` <a name="ResetEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilter"></a>

```go
func ResetEmailFilter()
```

##### `ResetEmailFilterMode` <a name="ResetEmailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailFilterMode"></a>

```go
func ResetEmailFilterMode()
```

##### `ResetEmailIncidentCreation` <a name="ResetEmailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailIncidentCreation"></a>

```go
func ResetEmailIncidentCreation()
```

##### `ResetEmailParser` <a name="ResetEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParser"></a>

```go
func ResetEmailParser()
```

##### `ResetEmailParsingFallback` <a name="ResetEmailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetEmailParsingFallback"></a>

```go
func ResetEmailParsingFallback()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationEmail` <a name="ResetIntegrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationEmail"></a>

```go
func ResetIntegrationEmail()
```

##### `ResetIntegrationKey` <a name="ResetIntegrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetIntegrationKey"></a>

```go
func ResetIntegrationKey()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetType"></a>

```go
func ResetType()
```

##### `ResetVendor` <a name="ResetVendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.resetVendor"></a>

```go
func ResetVendor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.ServiceIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.ServiceIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.ServiceIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.ServiceIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter">EmailFilter</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser">EmailParser</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput">EmailFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput">EmailFilterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput">EmailIncidentCreationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput">EmailParserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput">EmailParsingFallbackInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput">IntegrationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput">IntegrationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput">VendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode">EmailFilterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation">EmailIncidentCreation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback">EmailParsingFallback</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail">IntegrationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmailFilter`<sup>Required</sup> <a name="EmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilter"></a>

```go
func EmailFilter() ServiceIntegrationEmailFilterList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList">ServiceIntegrationEmailFilterList</a>

---

##### `EmailParser`<sup>Required</sup> <a name="EmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParser"></a>

```go
func EmailParser() ServiceIntegrationEmailParserList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList">ServiceIntegrationEmailParserList</a>

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `EmailFilterInput`<sup>Optional</sup> <a name="EmailFilterInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterInput"></a>

```go
func EmailFilterInput() interface{}
```

- *Type:* interface{}

---

##### `EmailFilterModeInput`<sup>Optional</sup> <a name="EmailFilterModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterModeInput"></a>

```go
func EmailFilterModeInput() *string
```

- *Type:* *string

---

##### `EmailIncidentCreationInput`<sup>Optional</sup> <a name="EmailIncidentCreationInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreationInput"></a>

```go
func EmailIncidentCreationInput() *string
```

- *Type:* *string

---

##### `EmailParserInput`<sup>Optional</sup> <a name="EmailParserInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParserInput"></a>

```go
func EmailParserInput() interface{}
```

- *Type:* interface{}

---

##### `EmailParsingFallbackInput`<sup>Optional</sup> <a name="EmailParsingFallbackInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallbackInput"></a>

```go
func EmailParsingFallbackInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationEmailInput`<sup>Optional</sup> <a name="IntegrationEmailInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmailInput"></a>

```go
func IntegrationEmailInput() *string
```

- *Type:* *string

---

##### `IntegrationKeyInput`<sup>Optional</sup> <a name="IntegrationKeyInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKeyInput"></a>

```go
func IntegrationKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VendorInput`<sup>Optional</sup> <a name="VendorInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendorInput"></a>

```go
func VendorInput() *string
```

- *Type:* *string

---

##### `EmailFilterMode`<sup>Required</sup> <a name="EmailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailFilterMode"></a>

```go
func EmailFilterMode() *string
```

- *Type:* *string

---

##### `EmailIncidentCreation`<sup>Required</sup> <a name="EmailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailIncidentCreation"></a>

```go
func EmailIncidentCreation() *string
```

- *Type:* *string

---

##### `EmailParsingFallback`<sup>Required</sup> <a name="EmailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.emailParsingFallback"></a>

```go
func EmailParsingFallback() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationEmail`<sup>Required</sup> <a name="IntegrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationEmail"></a>

```go
func IntegrationEmail() *string
```

- *Type:* *string

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.integrationKey"></a>

```go
func IntegrationKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceIntegrationConfig <a name="ServiceIntegrationConfig" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	EmailFilter: interface{},
	EmailFilterMode: *string,
	EmailIncidentCreation: *string,
	EmailParser: interface{},
	EmailParsingFallback: *string,
	Id: *string,
	IntegrationEmail: *string,
	IntegrationKey: *string,
	Name: *string,
	Type: *string,
	Vendor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#service ServiceIntegration#service}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter">EmailFilter</a></code> | <code>interface{}</code> | email_filter block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode">EmailFilterMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation">EmailIncidentCreation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser">EmailParser</a></code> | <code>interface{}</code> | email_parser block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback">EmailParsingFallback</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#id ServiceIntegration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail">IntegrationEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#name ServiceIntegration#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor">Vendor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#vendor ServiceIntegration#vendor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#service ServiceIntegration#service}.

---

##### `EmailFilter`<sup>Optional</sup> <a name="EmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilter"></a>

```go
EmailFilter interface{}
```

- *Type:* interface{}

email_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_filter ServiceIntegration#email_filter}

---

##### `EmailFilterMode`<sup>Optional</sup> <a name="EmailFilterMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailFilterMode"></a>

```go
EmailFilterMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_filter_mode ServiceIntegration#email_filter_mode}.

---

##### `EmailIncidentCreation`<sup>Optional</sup> <a name="EmailIncidentCreation" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailIncidentCreation"></a>

```go
EmailIncidentCreation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_incident_creation ServiceIntegration#email_incident_creation}.

---

##### `EmailParser`<sup>Optional</sup> <a name="EmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParser"></a>

```go
EmailParser interface{}
```

- *Type:* interface{}

email_parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_parser ServiceIntegration#email_parser}

---

##### `EmailParsingFallback`<sup>Optional</sup> <a name="EmailParsingFallback" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.emailParsingFallback"></a>

```go
EmailParsingFallback *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#email_parsing_fallback ServiceIntegration#email_parsing_fallback}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#id ServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationEmail`<sup>Optional</sup> <a name="IntegrationEmail" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationEmail"></a>

```go
IntegrationEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#integration_email ServiceIntegration#integration_email}.

---

##### `IntegrationKey`<sup>Optional</sup> <a name="IntegrationKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.integrationKey"></a>

```go
IntegrationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#integration_key ServiceIntegration#integration_key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#name ServiceIntegration#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `Vendor`<sup>Optional</sup> <a name="Vendor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationConfig.property.vendor"></a>

```go
Vendor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#vendor ServiceIntegration#vendor}.

---

### ServiceIntegrationEmailFilter <a name="ServiceIntegrationEmailFilter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationEmailFilter {
	BodyMode: *string,
	BodyRegex: *string,
	FromEmailMode: *string,
	FromEmailRegex: *string,
	SubjectMode: *string,
	SubjectRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode">BodyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex">BodyRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode">FromEmailMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex">FromEmailRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode">SubjectMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex">SubjectRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}. |

---

##### `BodyMode`<sup>Optional</sup> <a name="BodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyMode"></a>

```go
BodyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#body_mode ServiceIntegration#body_mode}.

---

##### `BodyRegex`<sup>Optional</sup> <a name="BodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.bodyRegex"></a>

```go
BodyRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#body_regex ServiceIntegration#body_regex}.

---

##### `FromEmailMode`<sup>Optional</sup> <a name="FromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailMode"></a>

```go
FromEmailMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#from_email_mode ServiceIntegration#from_email_mode}.

---

##### `FromEmailRegex`<sup>Optional</sup> <a name="FromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.fromEmailRegex"></a>

```go
FromEmailRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#from_email_regex ServiceIntegration#from_email_regex}.

---

##### `SubjectMode`<sup>Optional</sup> <a name="SubjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectMode"></a>

```go
SubjectMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#subject_mode ServiceIntegration#subject_mode}.

---

##### `SubjectRegex`<sup>Optional</sup> <a name="SubjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilter.property.subjectRegex"></a>

```go
SubjectRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#subject_regex ServiceIntegration#subject_regex}.

---

### ServiceIntegrationEmailParser <a name="ServiceIntegrationEmailParser" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationEmailParser {
	Action: *string,
	MatchPredicate: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate,
	ValueExtractor: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#action ServiceIntegration#action}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate">MatchPredicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | match_predicate block. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor">ValueExtractor</a></code> | <code>interface{}</code> | value_extractor block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#action ServiceIntegration#action}.

---

##### `MatchPredicate`<sup>Required</sup> <a name="MatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.matchPredicate"></a>

```go
MatchPredicate ServiceIntegrationEmailParserMatchPredicate
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

match_predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#match_predicate ServiceIntegration#match_predicate}

---

##### `ValueExtractor`<sup>Optional</sup> <a name="ValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParser.property.valueExtractor"></a>

```go
ValueExtractor interface{}
```

- *Type:* interface{}

value_extractor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#value_extractor ServiceIntegration#value_extractor}

---

### ServiceIntegrationEmailParserMatchPredicate <a name="ServiceIntegrationEmailParserMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationEmailParserMatchPredicate {
	Type: *string,
	Predicate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate">Predicate</a></code> | <code>interface{}</code> | predicate block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate.property.predicate"></a>

```go
Predicate interface{}
```

- *Type:* interface{}

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationEmailParserMatchPredicatePredicate {
	Type: *string,
	Matcher: *string,
	Part: *string,
	Predicate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher">Matcher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part">Part</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate">Predicate</a></code> | <code>interface{}</code> | predicate block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.matcher"></a>

```go
Matcher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `Part`<sup>Optional</sup> <a name="Part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.part"></a>

```go
Part *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicate.property.predicate"></a>

```go
Predicate interface{}
```

- *Type:* interface{}

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#predicate ServiceIntegration#predicate}

---

### ServiceIntegrationEmailParserMatchPredicatePredicatePredicate <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate {
	Matcher: *string,
	Part: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher">Matcher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#matcher ServiceIntegration#matcher}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part">Part</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}. |

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.matcher"></a>

```go
Matcher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#matcher ServiceIntegration#matcher}.

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.part"></a>

```go
Part *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicate.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}.

---

### ServiceIntegrationEmailParserValueExtractor <a name="ServiceIntegrationEmailParserValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

&serviceintegration.ServiceIntegrationEmailParserValueExtractor {
	Part: *string,
	Type: *string,
	ValueName: *string,
	EndsBefore: *string,
	Regex: *string,
	StartsAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part">Part</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#part ServiceIntegration#part}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName">ValueName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#value_name ServiceIntegration#value_name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore">EndsBefore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#regex ServiceIntegration#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter">StartsAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}. |

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.part"></a>

```go
Part *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#part ServiceIntegration#part}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#type ServiceIntegration#type}.

---

##### `ValueName`<sup>Required</sup> <a name="ValueName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.valueName"></a>

```go
ValueName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#value_name ServiceIntegration#value_name}.

---

##### `EndsBefore`<sup>Optional</sup> <a name="EndsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.endsBefore"></a>

```go
EndsBefore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#ends_before ServiceIntegration#ends_before}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#regex ServiceIntegration#regex}.

---

##### `StartsAfter`<sup>Optional</sup> <a name="StartsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractor.property.startsAfter"></a>

```go
StartsAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.2/docs/resources/service_integration#starts_after ServiceIntegration#starts_after}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceIntegrationEmailFilterList <a name="ServiceIntegrationEmailFilterList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceIntegrationEmailFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get"></a>

```go
func Get(index *f64) ServiceIntegrationEmailFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailFilterOutputReference <a name="ServiceIntegrationEmailFilterOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceIntegrationEmailFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode">ResetBodyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex">ResetBodyRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode">ResetFromEmailMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex">ResetFromEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode">ResetSubjectMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex">ResetSubjectRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBodyMode` <a name="ResetBodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyMode"></a>

```go
func ResetBodyMode()
```

##### `ResetBodyRegex` <a name="ResetBodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetBodyRegex"></a>

```go
func ResetBodyRegex()
```

##### `ResetFromEmailMode` <a name="ResetFromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailMode"></a>

```go
func ResetFromEmailMode()
```

##### `ResetFromEmailRegex` <a name="ResetFromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetFromEmailRegex"></a>

```go
func ResetFromEmailRegex()
```

##### `ResetSubjectMode` <a name="ResetSubjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectMode"></a>

```go
func ResetSubjectMode()
```

##### `ResetSubjectRegex` <a name="ResetSubjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.resetSubjectRegex"></a>

```go
func ResetSubjectRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput">BodyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput">BodyRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput">FromEmailModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput">FromEmailRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput">SubjectModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput">SubjectRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode">BodyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex">BodyRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode">FromEmailMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex">FromEmailRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode">SubjectMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex">SubjectRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `BodyModeInput`<sup>Optional</sup> <a name="BodyModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyModeInput"></a>

```go
func BodyModeInput() *string
```

- *Type:* *string

---

##### `BodyRegexInput`<sup>Optional</sup> <a name="BodyRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegexInput"></a>

```go
func BodyRegexInput() *string
```

- *Type:* *string

---

##### `FromEmailModeInput`<sup>Optional</sup> <a name="FromEmailModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailModeInput"></a>

```go
func FromEmailModeInput() *string
```

- *Type:* *string

---

##### `FromEmailRegexInput`<sup>Optional</sup> <a name="FromEmailRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegexInput"></a>

```go
func FromEmailRegexInput() *string
```

- *Type:* *string

---

##### `SubjectModeInput`<sup>Optional</sup> <a name="SubjectModeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectModeInput"></a>

```go
func SubjectModeInput() *string
```

- *Type:* *string

---

##### `SubjectRegexInput`<sup>Optional</sup> <a name="SubjectRegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegexInput"></a>

```go
func SubjectRegexInput() *string
```

- *Type:* *string

---

##### `BodyMode`<sup>Required</sup> <a name="BodyMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyMode"></a>

```go
func BodyMode() *string
```

- *Type:* *string

---

##### `BodyRegex`<sup>Required</sup> <a name="BodyRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.bodyRegex"></a>

```go
func BodyRegex() *string
```

- *Type:* *string

---

##### `FromEmailMode`<sup>Required</sup> <a name="FromEmailMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailMode"></a>

```go
func FromEmailMode() *string
```

- *Type:* *string

---

##### `FromEmailRegex`<sup>Required</sup> <a name="FromEmailRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.fromEmailRegex"></a>

```go
func FromEmailRegex() *string
```

- *Type:* *string

---

##### `SubjectMode`<sup>Required</sup> <a name="SubjectMode" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectMode"></a>

```go
func SubjectMode() *string
```

- *Type:* *string

---

##### `SubjectRegex`<sup>Required</sup> <a name="SubjectRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.subjectRegex"></a>

```go
func SubjectRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserList <a name="ServiceIntegrationEmailParserList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceIntegrationEmailParserList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get"></a>

```go
func Get(index *f64) ServiceIntegrationEmailParserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserMatchPredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserMatchPredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceIntegrationEmailParserMatchPredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate">ResetPredicate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate"></a>

```go
func PutPredicate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.resetPredicate"></a>

```go
func ResetPredicate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput">PredicateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicate"></a>

```go
func Predicate() ServiceIntegrationEmailParserMatchPredicatePredicateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicateList</a>

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.predicateInput"></a>

```go
func PredicateInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceIntegrationEmailParserMatchPredicate
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---


### ServiceIntegrationEmailParserMatchPredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserMatchPredicatePredicateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceIntegrationEmailParserMatchPredicatePredicateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get"></a>

```go
func Get(index *f64) ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserMatchPredicatePredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart">ResetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate">ResetPredicate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate"></a>

```go
func PutPredicate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.putPredicate.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetMatcher"></a>

```go
func ResetMatcher()
```

##### `ResetPart` <a name="ResetPart" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPart"></a>

```go
func ResetPart()
```

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.resetPredicate"></a>

```go
func ResetPredicate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput">MatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput">PartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput">PredicateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher">Matcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part">Part</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicate"></a>

```go
func Predicate() ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList">ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList</a>

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcherInput"></a>

```go
func MatcherInput() *string
```

- *Type:* *string

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.partInput"></a>

```go
func PartInput() *string
```

- *Type:* *string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.predicateInput"></a>

```go
func PredicateInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.matcher"></a>

```go
func Matcher() *string
```

- *Type:* *string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.part"></a>

```go
func Part() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserMatchPredicatePredicatePredicateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get"></a>

```go
func Get(index *f64) ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference <a name="ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput">MatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput">PartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher">Matcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part">Part</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcherInput"></a>

```go
func MatcherInput() *string
```

- *Type:* *string

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.partInput"></a>

```go
func PartInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.matcher"></a>

```go
func Matcher() *string
```

- *Type:* *string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.part"></a>

```go
func Part() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicatePredicatePredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserOutputReference <a name="ServiceIntegrationEmailParserOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceIntegrationEmailParserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate">PutMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor">PutValueExtractor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor">ResetValueExtractor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchPredicate` <a name="PutMatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate"></a>

```go
func PutMatchPredicate(value ServiceIntegrationEmailParserMatchPredicate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putMatchPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `PutValueExtractor` <a name="PutValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor"></a>

```go
func PutValueExtractor(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.putValueExtractor.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetValueExtractor` <a name="ResetValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.resetValueExtractor"></a>

```go
func ResetValueExtractor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate">MatchPredicate</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor">ValueExtractor</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput">MatchPredicateInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput">ValueExtractorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `MatchPredicate`<sup>Required</sup> <a name="MatchPredicate" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicate"></a>

```go
func MatchPredicate() ServiceIntegrationEmailParserMatchPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicateOutputReference">ServiceIntegrationEmailParserMatchPredicateOutputReference</a>

---

##### `ValueExtractor`<sup>Required</sup> <a name="ValueExtractor" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractor"></a>

```go
func ValueExtractor() ServiceIntegrationEmailParserValueExtractorList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList">ServiceIntegrationEmailParserValueExtractorList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `MatchPredicateInput`<sup>Optional</sup> <a name="MatchPredicateInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.matchPredicateInput"></a>

```go
func MatchPredicateInput() ServiceIntegrationEmailParserMatchPredicate
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserMatchPredicate">ServiceIntegrationEmailParserMatchPredicate</a>

---

##### `ValueExtractorInput`<sup>Optional</sup> <a name="ValueExtractorInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.valueExtractorInput"></a>

```go
func ValueExtractorInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserValueExtractorList <a name="ServiceIntegrationEmailParserValueExtractorList" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserValueExtractorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceIntegrationEmailParserValueExtractorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get"></a>

```go
func Get(index *f64) ServiceIntegrationEmailParserValueExtractorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceIntegrationEmailParserValueExtractorOutputReference <a name="ServiceIntegrationEmailParserValueExtractorOutputReference" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/serviceintegration"

serviceintegration.NewServiceIntegrationEmailParserValueExtractorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceIntegrationEmailParserValueExtractorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore">ResetEndsBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter">ResetStartsAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsBefore` <a name="ResetEndsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetEndsBefore"></a>

```go
func ResetEndsBefore()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetStartsAfter` <a name="ResetStartsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.resetStartsAfter"></a>

```go
func ResetStartsAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput">EndsBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput">PartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput">StartsAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput">ValueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore">EndsBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part">Part</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter">StartsAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName">ValueName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndsBeforeInput`<sup>Optional</sup> <a name="EndsBeforeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBeforeInput"></a>

```go
func EndsBeforeInput() *string
```

- *Type:* *string

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.partInput"></a>

```go
func PartInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `StartsAfterInput`<sup>Optional</sup> <a name="StartsAfterInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfterInput"></a>

```go
func StartsAfterInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueNameInput`<sup>Optional</sup> <a name="ValueNameInput" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueNameInput"></a>

```go
func ValueNameInput() *string
```

- *Type:* *string

---

##### `EndsBefore`<sup>Required</sup> <a name="EndsBefore" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.endsBefore"></a>

```go
func EndsBefore() *string
```

- *Type:* *string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.part"></a>

```go
func Part() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `StartsAfter`<sup>Required</sup> <a name="StartsAfter" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.startsAfter"></a>

```go
func StartsAfter() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValueName`<sup>Required</sup> <a name="ValueName" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.valueName"></a>

```go
func ValueName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.serviceIntegration.ServiceIntegrationEmailParserValueExtractorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



