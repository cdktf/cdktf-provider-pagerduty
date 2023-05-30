# `pagerduty_custom_field_schema_field_configuration`

Refer to the Terraform Registory for docs: [`pagerduty_custom_field_schema_field_configuration`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration).

# `customFieldSchemaFieldConfiguration` Submodule <a name="`customFieldSchemaFieldConfiguration` Submodule" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomFieldSchemaFieldConfiguration <a name="CustomFieldSchemaFieldConfiguration" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration pagerduty_custom_field_schema_field_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/customfieldschemafieldconfiguration"

customfieldschemafieldconfiguration.NewCustomFieldSchemaFieldConfiguration(scope Construct, id *string, config CustomFieldSchemaFieldConfigurationConfig) CustomFieldSchemaFieldConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig">CustomFieldSchemaFieldConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig">CustomFieldSchemaFieldConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype">ResetDefaultValueDatatype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue">ResetDefaultValueMultiValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDefaultValueDatatype` <a name="ResetDefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype"></a>

```go
func ResetDefaultValueDatatype()
```

##### `ResetDefaultValueMultiValue` <a name="ResetDefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue"></a>

```go
func ResetDefaultValueMultiValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired"></a>

```go
func ResetRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/customfieldschemafieldconfiguration"

customfieldschemafieldconfiguration.CustomFieldSchemaFieldConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/customfieldschemafieldconfiguration"

customfieldschemafieldconfiguration.CustomFieldSchemaFieldConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/customfieldschemafieldconfiguration"

customfieldschemafieldconfiguration.CustomFieldSchemaFieldConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput">DefaultValueDatatypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput">DefaultValueMultiValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype">DefaultValueDatatype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue">DefaultValueMultiValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultValueDatatypeInput`<sup>Optional</sup> <a name="DefaultValueDatatypeInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput"></a>

```go
func DefaultValueDatatypeInput() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DefaultValueMultiValueInput`<sup>Optional</sup> <a name="DefaultValueMultiValueInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput"></a>

```go
func DefaultValueMultiValueInput() interface{}
```

- *Type:* interface{}

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `DefaultValueDatatype`<sup>Required</sup> <a name="DefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype"></a>

```go
func DefaultValueDatatype() *string
```

- *Type:* *string

---

##### `DefaultValueMultiValue`<sup>Required</sup> <a name="DefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue"></a>

```go
func DefaultValueMultiValue() interface{}
```

- *Type:* interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomFieldSchemaFieldConfigurationConfig <a name="CustomFieldSchemaFieldConfigurationConfig" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-pagerduty-go/pagerduty/customfieldschemafieldconfiguration"

&customfieldschemafieldconfiguration.CustomFieldSchemaFieldConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Field: *string,
	Schema: *string,
	DefaultValue: *string,
	DefaultValueDatatype: *string,
	DefaultValueMultiValue: interface{},
	Id: *string,
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field">Field</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype">DefaultValueDatatype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue">DefaultValueMultiValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field"></a>

```go
Field *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}.

---

##### `DefaultValueDatatype`<sup>Optional</sup> <a name="DefaultValueDatatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype"></a>

```go
DefaultValueDatatype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}.

---

##### `DefaultValueMultiValue`<sup>Optional</sup> <a name="DefaultValueMultiValue" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue"></a>

```go
DefaultValueMultiValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.6/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}.

---



