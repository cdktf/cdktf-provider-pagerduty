# `pagerduty_custom_field_schema_field_configuration`

Refer to the Terraform Registory for docs: [`pagerduty_custom_field_schema_field_configuration`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration).

# `customFieldSchemaFieldConfiguration` Submodule <a name="`customFieldSchemaFieldConfiguration` Submodule" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomFieldSchemaFieldConfiguration <a name="CustomFieldSchemaFieldConfiguration" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration pagerduty_custom_field_schema_field_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field_schema_field_configuration

customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  field: str,
  schema: str,
  default_value: str = None,
  default_value_datatype: str = None,
  default_value_multi_value: typing.Union[bool, IResolvable] = None,
  id: str = None,
  required: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueDatatype">default_value_datatype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueMultiValue">default_value_multi_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.field"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.schema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}.

---

##### `default_value_datatype`<sup>Optional</sup> <a name="default_value_datatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueDatatype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}.

---

##### `default_value_multi_value`<sup>Optional</sup> <a name="default_value_multi_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.defaultValueMultiValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.Initializer.parameter.required"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype">reset_default_value_datatype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue">reset_default_value_multi_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired">reset_required</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_default_value_datatype` <a name="reset_default_value_datatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueDatatype"></a>

```python
def reset_default_value_datatype() -> None
```

##### `reset_default_value_multi_value` <a name="reset_default_value_multi_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetDefaultValueMultiValue"></a>

```python
def reset_default_value_multi_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.resetRequired"></a>

```python
def reset_required() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field_schema_field_configuration

customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field_schema_field_configuration

customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field_schema_field_configuration

customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput">default_value_datatype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput">default_value_multi_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype">default_value_datatype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue">default_value_multi_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_value_datatype_input`<sup>Optional</sup> <a name="default_value_datatype_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatypeInput"></a>

```python
default_value_datatype_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `default_value_multi_value_input`<sup>Optional</sup> <a name="default_value_multi_value_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValueInput"></a>

```python
default_value_multi_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `default_value_datatype`<sup>Required</sup> <a name="default_value_datatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueDatatype"></a>

```python
default_value_datatype: str
```

- *Type:* str

---

##### `default_value_multi_value`<sup>Required</sup> <a name="default_value_multi_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.defaultValueMultiValue"></a>

```python
default_value_multi_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomFieldSchemaFieldConfigurationConfig <a name="CustomFieldSchemaFieldConfigurationConfig" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field_schema_field_configuration

customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  field: str,
  schema: str,
  default_value: str = None,
  default_value_datatype: str = None,
  default_value_multi_value: typing.Union[bool, IResolvable] = None,
  id: str = None,
  required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field">field</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype">default_value_datatype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue">default_value_multi_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.field"></a>

```python
field: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#field CustomFieldSchemaFieldConfiguration#field}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#schema CustomFieldSchemaFieldConfiguration#schema}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value CustomFieldSchemaFieldConfiguration#default_value}.

---

##### `default_value_datatype`<sup>Optional</sup> <a name="default_value_datatype" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueDatatype"></a>

```python
default_value_datatype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_datatype CustomFieldSchemaFieldConfiguration#default_value_datatype}.

---

##### `default_value_multi_value`<sup>Optional</sup> <a name="default_value_multi_value" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.defaultValueMultiValue"></a>

```python
default_value_multi_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#default_value_multi_value CustomFieldSchemaFieldConfiguration#default_value_multi_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#id CustomFieldSchemaFieldConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-pagerduty.customFieldSchemaFieldConfiguration.CustomFieldSchemaFieldConfigurationConfig.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.4/docs/resources/custom_field_schema_field_configuration#required CustomFieldSchemaFieldConfiguration#required}.

---



