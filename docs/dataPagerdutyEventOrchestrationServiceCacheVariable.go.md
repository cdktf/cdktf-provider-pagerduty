# `dataPagerdutyEventOrchestrationServiceCacheVariable` Submodule <a name="`dataPagerdutyEventOrchestrationServiceCacheVariable` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariable <a name="DataPagerdutyEventOrchestrationServiceCacheVariable" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable pagerduty_event_orchestration_service_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.NewDataPagerdutyEventOrchestrationServiceCacheVariable(scope Construct, id *string, config DataPagerdutyEventOrchestrationServiceCacheVariableConfig) DataPagerdutyEventOrchestrationServiceCacheVariable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig">DataPagerdutyEventOrchestrationServiceCacheVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig">DataPagerdutyEventOrchestrationServiceCacheVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyEventOrchestrationServiceCacheVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyEventOrchestrationServiceCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationServiceCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList">DataPagerdutyEventOrchestrationServiceCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList">DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.condition"></a>

```go
func Condition() DataPagerdutyEventOrchestrationServiceCacheVariableConditionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList">DataPagerdutyEventOrchestrationServiceCacheVariableConditionList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.configuration"></a>

```go
func Configuration() DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList">DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariableCondition <a name="DataPagerdutyEventOrchestrationServiceCacheVariableCondition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

&datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition {

}
```


### DataPagerdutyEventOrchestrationServiceCacheVariableConfig <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

&datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.17.1/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}.

---

### DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

&datapagerdutyeventorchestrationservicecachevariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariableConditionList <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConditionList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.NewDataPagerdutyEventOrchestrationServiceCacheVariableConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyEventOrchestrationServiceCacheVariableConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get"></a>

```go
func Get(index *f64) DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.NewDataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition">DataPagerdutyEventOrchestrationServiceCacheVariableCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyEventOrchestrationServiceCacheVariableCondition
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition">DataPagerdutyEventOrchestrationServiceCacheVariableCondition</a>

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.NewDataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get"></a>

```go
func Get(index *f64) DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyeventorchestrationservicecachevariable"

datapagerdutyeventorchestrationservicecachevariable.NewDataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds">TtlSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration">DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `TtlSeconds`<sup>Required</sup> <a name="TtlSeconds" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```go
func TtlSeconds() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration">DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration</a>

---



