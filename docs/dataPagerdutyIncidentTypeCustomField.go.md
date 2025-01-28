# `dataPagerdutyIncidentTypeCustomField` Submodule <a name="`dataPagerdutyIncidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyIncidentTypeCustomField <a name="DataPagerdutyIncidentTypeCustomField" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.3/docs/data-sources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.NewDataPagerdutyIncidentTypeCustomField(scope Construct, id *string, config DataPagerdutyIncidentTypeCustomFieldConfig) DataPagerdutyIncidentTypeCustomField
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig">DataPagerdutyIncidentTypeCustomFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig">DataPagerdutyIncidentTypeCustomFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomField_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomField_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomField_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomField_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataPagerdutyIncidentTypeCustomField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataPagerdutyIncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.3/docs/data-sources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyIncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions">FieldOptions</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType">FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType">IncidentType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FieldOptions`<sup>Required</sup> <a name="FieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions"></a>

```go
func FieldOptions() DataPagerdutyIncidentTypeCustomFieldFieldOptionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a>

---

##### `FieldType`<sup>Required</sup> <a name="FieldType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType"></a>

```go
func FieldType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput"></a>

```go
func IncidentTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType"></a>

```go
func IncidentType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyIncidentTypeCustomFieldConfig <a name="DataPagerdutyIncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

&datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomFieldConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	IncidentType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.3/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType">IncidentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.3/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.3/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}.

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType"></a>

```go
IncidentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.19.3/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}.

---

### DataPagerdutyIncidentTypeCustomFieldFieldOptions <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

&datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomFieldFieldOptions {

}
```


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsData <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsData" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

&datapagerdutyincidenttypecustomfield.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.NewDataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyIncidentTypeCustomFieldFieldOptionsData
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a>

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsList <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsList" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.NewDataPagerdutyIncidentTypeCustomFieldFieldOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataPagerdutyIncidentTypeCustomFieldFieldOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get"></a>

```go
func Get(index *f64) DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/datapagerdutyincidenttypecustomfield"

datapagerdutyincidenttypecustomfield.NewDataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data">Data</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data"></a>

```go
func Data() DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataPagerdutyIncidentTypeCustomFieldFieldOptions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a>

---



