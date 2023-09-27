# `data_pagerduty_licenses`

Refer to the Terraform Registory for docs: [`data_pagerduty_licenses`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses).

# `dataPagerdutyLicenses` Submodule <a name="`dataPagerdutyLicenses` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyLicenses <a name="DataPagerdutyLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses pagerduty_licenses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

datapagerdutylicenses.NewDataPagerdutyLicenses(scope Construct, id *string, config DataPagerdutyLicensesConfig) DataPagerdutyLicenses
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig">DataPagerdutyLicensesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig">DataPagerdutyLicensesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses">PutLicenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetLicenses">ResetLicenses</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLicenses` <a name="PutLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses"></a>

```go
func PutLicenses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetId"></a>

```go
func ResetId()
```

##### `ResetLicenses` <a name="ResetLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetLicenses"></a>

```go
func ResetLicenses()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

datapagerdutylicenses.DataPagerdutyLicenses_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

datapagerdutylicenses.DataPagerdutyLicenses_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

datapagerdutylicenses.DataPagerdutyLicenses_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licenses">Licenses</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList">DataPagerdutyLicensesLicensesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licensesInput">LicensesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licenses"></a>

```go
func Licenses() DataPagerdutyLicensesLicensesList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList">DataPagerdutyLicensesLicensesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LicensesInput`<sup>Optional</sup> <a name="LicensesInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licensesInput"></a>

```go
func LicensesInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyLicensesConfig <a name="DataPagerdutyLicensesConfig" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

&datapagerdutylicenses.DataPagerdutyLicensesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Licenses: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.licenses">Licenses</a></code> | <code>interface{}</code> | licenses block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Licenses`<sup>Optional</sup> <a name="Licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.licenses"></a>

```go
Licenses interface{}
```

- *Type:* interface{}

licenses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#licenses DataPagerdutyLicenses#licenses}

---

### DataPagerdutyLicensesLicenses <a name="DataPagerdutyLicensesLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

&datapagerdutylicenses.DataPagerdutyLicensesLicenses {
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
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.allocationsAvailable">AllocationsAvailable</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#allocations_available DataPagerdutyLicenses#allocations_available}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.currentValue">CurrentValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#current_value DataPagerdutyLicenses#current_value}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#description DataPagerdutyLicenses#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#html_url DataPagerdutyLicenses#html_url}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#name DataPagerdutyLicenses#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.roleGroup">RoleGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#role_group DataPagerdutyLicenses#role_group}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#self DataPagerdutyLicenses#self}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.summary">Summary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#summary DataPagerdutyLicenses#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#type DataPagerdutyLicenses#type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.validRoles">ValidRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#valid_roles DataPagerdutyLicenses#valid_roles}. |

---

##### `AllocationsAvailable`<sup>Optional</sup> <a name="AllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.allocationsAvailable"></a>

```go
AllocationsAvailable *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#allocations_available DataPagerdutyLicenses#allocations_available}.

---

##### `CurrentValue`<sup>Optional</sup> <a name="CurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.currentValue"></a>

```go
CurrentValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#current_value DataPagerdutyLicenses#current_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#description DataPagerdutyLicenses#description}.

---

##### `HtmlUrl`<sup>Optional</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.htmlUrl"></a>

```go
HtmlUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#html_url DataPagerdutyLicenses#html_url}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#name DataPagerdutyLicenses#name}.

---

##### `RoleGroup`<sup>Optional</sup> <a name="RoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.roleGroup"></a>

```go
RoleGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#role_group DataPagerdutyLicenses#role_group}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.selfAttribute"></a>

```go
SelfAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#self DataPagerdutyLicenses#self}.

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#summary DataPagerdutyLicenses#summary}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#type DataPagerdutyLicenses#type}.

---

##### `ValidRoles`<sup>Optional</sup> <a name="ValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.validRoles"></a>

```go
ValidRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.16.2/docs/data-sources/licenses#valid_roles DataPagerdutyLicenses#valid_roles}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyLicensesLicensesList <a name="DataPagerdutyLicensesLicensesList" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

datapagerdutylicenses.NewDataPagerdutyLicensesLicensesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyLicensesLicensesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get"></a>

```go
func Get(index *f64) DataPagerdutyLicensesLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataPagerdutyLicensesLicensesOutputReference <a name="DataPagerdutyLicensesLicensesOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v10/datapagerdutylicenses"

datapagerdutylicenses.NewDataPagerdutyLicensesLicensesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyLicensesLicensesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetAllocationsAvailable">ResetAllocationsAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetCurrentValue">ResetCurrentValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetHtmlUrl">ResetHtmlUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetRoleGroup">ResetRoleGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetValidRoles">ResetValidRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocationsAvailable` <a name="ResetAllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetAllocationsAvailable"></a>

```go
func ResetAllocationsAvailable()
```

##### `ResetCurrentValue` <a name="ResetCurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetCurrentValue"></a>

```go
func ResetCurrentValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHtmlUrl` <a name="ResetHtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetHtmlUrl"></a>

```go
func ResetHtmlUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRoleGroup` <a name="ResetRoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetRoleGroup"></a>

```go
func ResetRoleGroup()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSummary"></a>

```go
func ResetSummary()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValidRoles` <a name="ResetValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetValidRoles"></a>

```go
func ResetValidRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailableInput">AllocationsAvailableInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValueInput">CurrentValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrlInput">HtmlUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroupInput">RoleGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRolesInput">ValidRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailable">AllocationsAvailable</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValue">CurrentValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrl">HtmlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroup">RoleGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRoles">ValidRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocationsAvailableInput`<sup>Optional</sup> <a name="AllocationsAvailableInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailableInput"></a>

```go
func AllocationsAvailableInput() *f64
```

- *Type:* *f64

---

##### `CurrentValueInput`<sup>Optional</sup> <a name="CurrentValueInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValueInput"></a>

```go
func CurrentValueInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HtmlUrlInput`<sup>Optional</sup> <a name="HtmlUrlInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrlInput"></a>

```go
func HtmlUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleGroupInput`<sup>Optional</sup> <a name="RoleGroupInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroupInput"></a>

```go
func RoleGroupInput() *string
```

- *Type:* *string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() *string
```

- *Type:* *string

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidRolesInput`<sup>Optional</sup> <a name="ValidRolesInput" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRolesInput"></a>

```go
func ValidRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocationsAvailable`<sup>Required</sup> <a name="AllocationsAvailable" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailable"></a>

```go
func AllocationsAvailable() *f64
```

- *Type:* *f64

---

##### `CurrentValue`<sup>Required</sup> <a name="CurrentValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValue"></a>

```go
func CurrentValue() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrl"></a>

```go
func HtmlUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleGroup`<sup>Required</sup> <a name="RoleGroup" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroup"></a>

```go
func RoleGroup() *string
```

- *Type:* *string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ValidRoles`<sup>Required</sup> <a name="ValidRoles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRoles"></a>

```go
func ValidRoles() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



