# `data_pagerduty_license`

Refer to the Terraform Registory for docs: [`data_pagerduty_license`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license).

# `dataPagerdutyLicense` Submodule <a name="`dataPagerdutyLicense` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyLicense <a name="DataPagerdutyLicense" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license pagerduty_license}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutylicense"

datapagerdutylicense.NewDataPagerdutyLicense(scope Construct, id *string, config DataPagerdutyLicenseConfig) DataPagerdutyLicense
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig">DataPagerdutyLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig">DataPagerdutyLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetAllocationsAvailable">ResetAllocationsAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetCurrentValue">ResetCurrentValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetHtmlUrl">ResetHtmlUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetRoleGroup">ResetRoleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetValidRoles">ResetValidRoles</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllocationsAvailable` <a name="ResetAllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetAllocationsAvailable"></a>

```go
func ResetAllocationsAvailable()
```

##### `ResetCurrentValue` <a name="ResetCurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetCurrentValue"></a>

```go
func ResetCurrentValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHtmlUrl` <a name="ResetHtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetHtmlUrl"></a>

```go
func ResetHtmlUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetName"></a>

```go
func ResetName()
```

##### `ResetRoleGroup` <a name="ResetRoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetRoleGroup"></a>

```go
func ResetRoleGroup()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetType"></a>

```go
func ResetType()
```

##### `ResetValidRoles` <a name="ResetValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.resetValidRoles"></a>

```go
func ResetValidRoles()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutylicense"

datapagerdutylicense.DataPagerdutyLicense_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutylicense"

datapagerdutylicense.DataPagerdutyLicense_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutylicense"

datapagerdutylicense.DataPagerdutyLicense_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailableInput">AllocationsAvailableInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValueInput">CurrentValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrlInput">HtmlUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroupInput">RoleGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRolesInput">ValidRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailable">AllocationsAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValue">CurrentValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroup">RoleGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRoles">ValidRoles</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllocationsAvailableInput`<sup>Optional</sup> <a name="AllocationsAvailableInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailableInput"></a>

```go
func AllocationsAvailableInput() *f64
```

- *Type:* *f64

---

##### `CurrentValueInput`<sup>Optional</sup> <a name="CurrentValueInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValueInput"></a>

```go
func CurrentValueInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HtmlUrlInput`<sup>Optional</sup> <a name="HtmlUrlInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrlInput"></a>

```go
func HtmlUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleGroupInput`<sup>Optional</sup> <a name="RoleGroupInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroupInput"></a>

```go
func RoleGroupInput() *string
```

- *Type:* *string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidRolesInput`<sup>Optional</sup> <a name="ValidRolesInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRolesInput"></a>

```go
func ValidRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocationsAvailable`<sup>Required</sup> <a name="AllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.allocationsAvailable"></a>

```go
func AllocationsAvailable() *f64
```

- *Type:* *f64

---

##### `CurrentValue`<sup>Required</sup> <a name="CurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.currentValue"></a>

```go
func CurrentValue() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleGroup`<sup>Required</sup> <a name="RoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.roleGroup"></a>

```go
func RoleGroup() *string
```

- *Type:* *string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidRoles`<sup>Required</sup> <a name="ValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.validRoles"></a>

```go
func ValidRoles() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicense.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyLicenseConfig <a name="DataPagerdutyLicenseConfig" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutylicense"

&datapagerdutylicense.DataPagerdutyLicenseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllocationsAvailable: *f64,
	CurrentValue: *f64,
	Description: *string,
	HtmlUrl: *string,
	Id: *string,
	Name: *string,
	RoleGroup: *string,
	SelfAttribute: *string,
	Summary: *string,
	Type: *string,
	ValidRoles: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.allocationsAvailable">AllocationsAvailable</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#allocations_available DataPagerdutyLicense#allocations_available}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.currentValue">CurrentValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#current_value DataPagerdutyLicense#current_value}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#description DataPagerdutyLicense#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#html_url DataPagerdutyLicense#html_url}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#id DataPagerdutyLicense#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#name DataPagerdutyLicense#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.roleGroup">RoleGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#role_group DataPagerdutyLicense#role_group}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#self DataPagerdutyLicense#self}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#summary DataPagerdutyLicense#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#type DataPagerdutyLicense#type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.validRoles">ValidRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#valid_roles DataPagerdutyLicense#valid_roles}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocationsAvailable`<sup>Optional</sup> <a name="AllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.allocationsAvailable"></a>

```go
AllocationsAvailable *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#allocations_available DataPagerdutyLicense#allocations_available}.

---

##### `CurrentValue`<sup>Optional</sup> <a name="CurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.currentValue"></a>

```go
CurrentValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#current_value DataPagerdutyLicense#current_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#description DataPagerdutyLicense#description}.

---

##### `HtmlUrl`<sup>Optional</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.htmlUrl"></a>

```go
HtmlUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#html_url DataPagerdutyLicense#html_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#id DataPagerdutyLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#name DataPagerdutyLicense#name}.

---

##### `RoleGroup`<sup>Optional</sup> <a name="RoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.roleGroup"></a>

```go
RoleGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#role_group DataPagerdutyLicense#role_group}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.selfAttribute"></a>

```go
SelfAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#self DataPagerdutyLicense#self}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#summary DataPagerdutyLicense#summary}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#type DataPagerdutyLicense#type}.

---

##### `ValidRoles`<sup>Optional</sup> <a name="ValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicense.DataPagerdutyLicenseConfig.property.validRoles"></a>

```go
ValidRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.0/docs/data-sources/license#valid_roles DataPagerdutyLicense#valid_roles}.

---



