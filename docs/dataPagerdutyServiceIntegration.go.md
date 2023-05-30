# `data_pagerduty_service_integration`

Refer to the Terraform Registory for docs: [`data_pagerduty_service_integration`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration).

# `dataPagerdutyServiceIntegration` Submodule <a name="`dataPagerdutyServiceIntegration` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyServiceIntegration <a name="DataPagerdutyServiceIntegration" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration pagerduty_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/datapagerdutyserviceintegration"

datapagerdutyserviceintegration.NewDataPagerdutyServiceIntegration(scope Construct, id *string, config DataPagerdutyServiceIntegrationConfig) DataPagerdutyServiceIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig">DataPagerdutyServiceIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig">DataPagerdutyServiceIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/datapagerdutyserviceintegration"

datapagerdutyserviceintegration.DataPagerdutyServiceIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/datapagerdutyserviceintegration"

datapagerdutyserviceintegration.DataPagerdutyServiceIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/datapagerdutyserviceintegration"

datapagerdutyserviceintegration.DataPagerdutyServiceIntegration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.integrationSummaryInput">IntegrationSummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.integrationSummary">IntegrationSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.integrationKey"></a>

```go
func IntegrationKey() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationSummaryInput`<sup>Optional</sup> <a name="IntegrationSummaryInput" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.integrationSummaryInput"></a>

```go
func IntegrationSummaryInput() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationSummary`<sup>Required</sup> <a name="IntegrationSummary" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.integrationSummary"></a>

```go
func IntegrationSummary() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyServiceIntegrationConfig <a name="DataPagerdutyServiceIntegrationConfig" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v7/datapagerdutyserviceintegration"

&datapagerdutyserviceintegration.DataPagerdutyServiceIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IntegrationSummary: *string,
	ServiceName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.integrationSummary">IntegrationSummary</a></code> | <code>*string</code> | examples 'Amazon CloudWatch', 'New Relic. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration#service_name DataPagerdutyServiceIntegration#service_name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration#id DataPagerdutyServiceIntegration#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IntegrationSummary`<sup>Required</sup> <a name="IntegrationSummary" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.integrationSummary"></a>

```go
IntegrationSummary *string
```

- *Type:* *string

examples 'Amazon CloudWatch', 'New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration#integration_summary DataPagerdutyServiceIntegration#integration_summary}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration#service_name DataPagerdutyServiceIntegration#service_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyServiceIntegration.DataPagerdutyServiceIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/data-sources/service_integration#id DataPagerdutyServiceIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



