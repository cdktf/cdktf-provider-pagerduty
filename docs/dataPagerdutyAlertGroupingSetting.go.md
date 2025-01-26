# `dataPagerdutyAlertGroupingSetting` Submodule <a name="`dataPagerdutyAlertGroupingSetting` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAlertGroupingSetting <a name="DataPagerdutyAlertGroupingSetting" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting pagerduty_alert_grouping_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

datapagerdutyalertgroupingsetting.NewDataPagerdutyAlertGroupingSetting(scope Construct, id *string, config DataPagerdutyAlertGroupingSettingConfig) DataPagerdutyAlertGroupingSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig">DataPagerdutyAlertGroupingSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig">DataPagerdutyAlertGroupingSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.putConfig"></a>

```go
func PutConfig(value DataPagerdutyAlertGroupingSettingConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetConfig"></a>

```go
func ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

datapagerdutyalertgroupingsetting.DataPagerdutyAlertGroupingSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

datapagerdutyalertgroupingsetting.DataPagerdutyAlertGroupingSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

datapagerdutyalertgroupingsetting.DataPagerdutyAlertGroupingSetting_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

datapagerdutyalertgroupingsetting.DataPagerdutyAlertGroupingSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyAlertGroupingSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyAlertGroupingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAlertGroupingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference">DataPagerdutyAlertGroupingSettingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.config"></a>

```go
func Config() DataPagerdutyAlertGroupingSettingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference">DataPagerdutyAlertGroupingSettingConfigAOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAlertGroupingSettingConfig <a name="DataPagerdutyAlertGroupingSettingConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

&datapagerdutyalertgroupingsetting.DataPagerdutyAlertGroupingSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Config: github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a></code> | config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.config"></a>

```go
Config DataPagerdutyAlertGroupingSettingConfigA
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#config DataPagerdutyAlertGroupingSetting#config}

---

### DataPagerdutyAlertGroupingSettingConfigA <a name="DataPagerdutyAlertGroupingSettingConfigA" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

&datapagerdutyalertgroupingsetting.DataPagerdutyAlertGroupingSettingConfigA {
	Aggregate: *string,
	Fields: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.property.aggregate">Aggregate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#aggregate DataPagerdutyAlertGroupingSetting#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#fields DataPagerdutyAlertGroupingSetting#fields}. |

---

##### `Aggregate`<sup>Optional</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.property.aggregate"></a>

```go
Aggregate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#aggregate DataPagerdutyAlertGroupingSetting#aggregate}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.2/docs/data-sources/alert_grouping_setting#fields DataPagerdutyAlertGroupingSetting#fields}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyAlertGroupingSettingConfigAOutputReference <a name="DataPagerdutyAlertGroupingSettingConfigAOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v13/datapagerdutyalertgroupingsetting"

datapagerdutyalertgroupingsetting.NewDataPagerdutyAlertGroupingSettingConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPagerdutyAlertGroupingSettingConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resetAggregate">ResetAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregate` <a name="ResetAggregate" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resetAggregate"></a>

```go
func ResetAggregate()
```

##### `ResetFields` <a name="ResetFields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resetFields"></a>

```go
func ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeWindow">TimeWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregateInput">AggregateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregate">Aggregate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeWindow"></a>

```go
func TimeWindow() *f64
```

- *Type:* *f64

---

##### `AggregateInput`<sup>Optional</sup> <a name="AggregateInput" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregateInput"></a>

```go
func AggregateInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Aggregate`<sup>Required</sup> <a name="Aggregate" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregate"></a>

```go
func Aggregate() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



