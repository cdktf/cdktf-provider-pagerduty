# `dataPagerdutyStandardsResourcesScores` Submodule <a name="`dataPagerdutyStandardsResourcesScores` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyStandardsResourcesScores <a name="DataPagerdutyStandardsResourcesScores" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/standards_resources_scores pagerduty_standards_resources_scores}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.NewDataPagerdutyStandardsResourcesScores(scope Construct, id *string, config DataPagerdutyStandardsResourcesScoresConfig) DataPagerdutyStandardsResourcesScores
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig">DataPagerdutyStandardsResourcesScoresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig">DataPagerdutyStandardsResourcesScoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScores_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScores_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScores_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScores_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyStandardsResourcesScores to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyStandardsResourcesScores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/standards_resources_scores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyStandardsResourcesScores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList">DataPagerdutyStandardsResourcesScoresResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resources"></a>

```go
func Resources() DataPagerdutyStandardsResourcesScoresResourcesList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList">DataPagerdutyStandardsResourcesScoresResourcesList</a>

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyStandardsResourcesScoresConfig <a name="DataPagerdutyStandardsResourcesScoresConfig" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

&datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScoresConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Ids: *[]*string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.ids">Ids</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.26.3/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}.

---

### DataPagerdutyStandardsResourcesScoresResources <a name="DataPagerdutyStandardsResourcesScoresResources" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

&datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScoresResources {

}
```


### DataPagerdutyStandardsResourcesScoresResourcesScore <a name="DataPagerdutyStandardsResourcesScoresResourcesScore" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

&datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScoresResourcesScore {

}
```


### DataPagerdutyStandardsResourcesScoresResourcesStandards <a name="DataPagerdutyStandardsResourcesScoresResourcesStandards" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

&datapagerdutystandardsresourcesscores.DataPagerdutyStandardsResourcesScoresResourcesStandards {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyStandardsResourcesScoresResourcesList <a name="DataPagerdutyStandardsResourcesScoresResourcesList" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.NewDataPagerdutyStandardsResourcesScoresResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyStandardsResourcesScoresResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get"></a>

```go
func Get(index *f64) DataPagerdutyStandardsResourcesScoresResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyStandardsResourcesScoresResourcesOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.NewDataPagerdutyStandardsResourcesScoresResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyStandardsResourcesScoresResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.score">Score</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference">DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.standards">Standards</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList">DataPagerdutyStandardsResourcesScoresResourcesStandardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources">DataPagerdutyStandardsResourcesScoresResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.score"></a>

```go
func Score() DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference">DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference</a>

---

##### `Standards`<sup>Required</sup> <a name="Standards" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.standards"></a>

```go
func Standards() DataPagerdutyStandardsResourcesScoresResourcesStandardsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList">DataPagerdutyStandardsResourcesScoresResourcesStandardsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyStandardsResourcesScoresResources
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources">DataPagerdutyStandardsResourcesScoresResources</a>

---


### DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.NewDataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.passing">Passing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.total">Total</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore">DataPagerdutyStandardsResourcesScoresResourcesScore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Passing`<sup>Required</sup> <a name="Passing" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.passing"></a>

```go
func Passing() *f64
```

- *Type:* *f64

---

##### `Total`<sup>Required</sup> <a name="Total" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.total"></a>

```go
func Total() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyStandardsResourcesScoresResourcesScore
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore">DataPagerdutyStandardsResourcesScoresResourcesScore</a>

---


### DataPagerdutyStandardsResourcesScoresResourcesStandardsList <a name="DataPagerdutyStandardsResourcesScoresResourcesStandardsList" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.NewDataPagerdutyStandardsResourcesScoresResourcesStandardsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyStandardsResourcesScoresResourcesStandardsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get"></a>

```go
func Get(index *f64) DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/v14/datapagerdutystandardsresourcesscores"

datapagerdutystandardsresourcesscores.NewDataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.pass">Pass</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards">DataPagerdutyStandardsResourcesScoresResourcesStandards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pass`<sup>Required</sup> <a name="Pass" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.pass"></a>

```go
func Pass() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyStandardsResourcesScoresResourcesStandards
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards">DataPagerdutyStandardsResourcesScoresResourcesStandards</a>

---



