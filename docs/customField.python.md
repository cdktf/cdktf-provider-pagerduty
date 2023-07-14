# `pagerduty_custom_field`

Refer to the Terraform Registory for docs: [`pagerduty_custom_field`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field).

# `customField` Submodule <a name="`customField` Submodule" id="@cdktf/provider-pagerduty.customField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomField <a name="CustomField" id="@cdktf/provider-pagerduty.customField.CustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field pagerduty_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field

customField.CustomField(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datatype: str,
  display_name: str,
  name: str,
  description: str = None,
  fixed_options: typing.Union[bool, IResolvable] = None,
  id: str = None,
  multi_value: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.datatype">datatype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#datatype CustomField#datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#display_name CustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#name CustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#description CustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.fixedOptions">fixed_options</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#fixed_options CustomField#fixed_options}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#id CustomField#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.multiValue">multi_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#multi_value CustomField#multi_value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datatype`<sup>Required</sup> <a name="datatype" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.datatype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#datatype CustomField#datatype}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#display_name CustomField#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#name CustomField#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#description CustomField#description}.

---

##### `fixed_options`<sup>Optional</sup> <a name="fixed_options" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.fixedOptions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#fixed_options CustomField#fixed_options}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#id CustomField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_value`<sup>Optional</sup> <a name="multi_value" id="@cdktf/provider-pagerduty.customField.CustomField.Initializer.parameter.multiValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#multi_value CustomField#multi_value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.resetFixedOptions">reset_fixed_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.resetMultiValue">reset_multi_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.customField.CustomField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.customField.CustomField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.customField.CustomField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.customField.CustomField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.customField.CustomField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.customField.CustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.customField.CustomField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.customField.CustomField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.customField.CustomField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.customField.CustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.customField.CustomField.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_fixed_options` <a name="reset_fixed_options" id="@cdktf/provider-pagerduty.customField.CustomField.resetFixedOptions"></a>

```python
def reset_fixed_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.customField.CustomField.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multi_value` <a name="reset_multi_value" id="@cdktf/provider-pagerduty.customField.CustomField.resetMultiValue"></a>

```python
def reset_multi_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.customField.CustomField.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field

customField.CustomField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customField.CustomField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.customField.CustomField.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field

customField.CustomField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customField.CustomField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.customField.CustomField.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field

customField.CustomField.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.customField.CustomField.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.datatypeInput">datatype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.fixedOptionsInput">fixed_options_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.multiValueInput">multi_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.datatype">datatype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.fixedOptions">fixed_options</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.multiValue">multi_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.customField.CustomField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.customField.CustomField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.customField.CustomField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.customField.CustomField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.customField.CustomField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.customField.CustomField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.customField.CustomField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customField.CustomField.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customField.CustomField.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.customField.CustomField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.customField.CustomField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customField.CustomField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customField.CustomField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customField.CustomField.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datatype_input`<sup>Optional</sup> <a name="datatype_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.datatypeInput"></a>

```python
datatype_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `fixed_options_input`<sup>Optional</sup> <a name="fixed_options_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.fixedOptionsInput"></a>

```python
fixed_options_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multi_value_input`<sup>Optional</sup> <a name="multi_value_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.multiValueInput"></a>

```python
multi_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.customField.CustomField.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `datatype`<sup>Required</sup> <a name="datatype" id="@cdktf/provider-pagerduty.customField.CustomField.property.datatype"></a>

```python
datatype: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.customField.CustomField.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.customField.CustomField.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fixed_options`<sup>Required</sup> <a name="fixed_options" id="@cdktf/provider-pagerduty.customField.CustomField.property.fixedOptions"></a>

```python
fixed_options: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.customField.CustomField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multi_value`<sup>Required</sup> <a name="multi_value" id="@cdktf/provider-pagerduty.customField.CustomField.property.multiValue"></a>

```python
multi_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.customField.CustomField.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.customField.CustomField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomFieldConfig <a name="CustomFieldConfig" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import custom_field

customField.CustomFieldConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datatype: str,
  display_name: str,
  name: str,
  description: str = None,
  fixed_options: typing.Union[bool, IResolvable] = None,
  id: str = None,
  multi_value: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.datatype">datatype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#datatype CustomField#datatype}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#display_name CustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#name CustomField#name}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#description CustomField#description}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.fixedOptions">fixed_options</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#fixed_options CustomField#fixed_options}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#id CustomField#id}. |
| <code><a href="#@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.multiValue">multi_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#multi_value CustomField#multi_value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datatype`<sup>Required</sup> <a name="datatype" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.datatype"></a>

```python
datatype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#datatype CustomField#datatype}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#display_name CustomField#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#name CustomField#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#description CustomField#description}.

---

##### `fixed_options`<sup>Optional</sup> <a name="fixed_options" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.fixedOptions"></a>

```python
fixed_options: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#fixed_options CustomField#fixed_options}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#id CustomField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multi_value`<sup>Optional</sup> <a name="multi_value" id="@cdktf/provider-pagerduty.customField.CustomFieldConfig.property.multiValue"></a>

```python
multi_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.15.1/docs/resources/custom_field#multi_value CustomField#multi_value}.

---



