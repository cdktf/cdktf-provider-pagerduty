# `dataPagerdutyLicenses` Submodule <a name="`dataPagerdutyLicenses` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyLicenses <a name="DataPagerdutyLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses"></a>

Represents a {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses pagerduty_licenses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicenses(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  licenses: typing.Union[IResolvable, typing.List[DataPagerdutyLicensesLicenses]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.licenses">licenses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]</code> | licenses block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.Initializer.parameter.licenses"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]

licenses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#licenses DataPagerdutyLicenses#licenses}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses">put_licenses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetLicenses">reset_licenses</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_licenses` <a name="put_licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses"></a>

```python
def put_licenses(
  value: typing.Union[IResolvable, typing.List[DataPagerdutyLicensesLicenses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.putLicenses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_licenses` <a name="reset_licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.resetLicenses"></a>

```python
def reset_licenses() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicenses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicenses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicenses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licenses">licenses</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList">DataPagerdutyLicensesLicensesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licensesInput">licenses_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licenses"></a>

```python
licenses: DataPagerdutyLicensesLicensesList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList">DataPagerdutyLicensesLicensesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `licenses_input`<sup>Optional</sup> <a name="licenses_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.licensesInput"></a>

```python
licenses_input: typing.Union[IResolvable, typing.List[DataPagerdutyLicensesLicenses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicenses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyLicensesConfig <a name="DataPagerdutyLicensesConfig" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicensesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  licenses: typing.Union[IResolvable, typing.List[DataPagerdutyLicensesLicenses]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.licenses">licenses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]</code> | licenses block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenses`<sup>Optional</sup> <a name="licenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesConfig.property.licenses"></a>

```python
licenses: typing.Union[IResolvable, typing.List[DataPagerdutyLicensesLicenses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]

licenses block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#licenses DataPagerdutyLicenses#licenses}

---

### DataPagerdutyLicensesLicenses <a name="DataPagerdutyLicensesLicenses" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicensesLicenses(
  allocations_available: typing.Union[int, float] = None,
  current_value: typing.Union[int, float] = None,
  description: str = None,
  html_url: str = None,
  id: str = None,
  name: str = None,
  role_group: str = None,
  self_attribute: str = None,
  summary: str = None,
  type: str = None,
  valid_roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.allocationsAvailable">allocations_available</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#allocations_available DataPagerdutyLicenses#allocations_available}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.currentValue">current_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#current_value DataPagerdutyLicenses#current_value}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#description DataPagerdutyLicenses#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.htmlUrl">html_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#html_url DataPagerdutyLicenses#html_url}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#id DataPagerdutyLicenses#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#name DataPagerdutyLicenses#name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.roleGroup">role_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#role_group DataPagerdutyLicenses#role_group}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.selfAttribute">self_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#self DataPagerdutyLicenses#self}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#summary DataPagerdutyLicenses#summary}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#type DataPagerdutyLicenses#type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.validRoles">valid_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#valid_roles DataPagerdutyLicenses#valid_roles}. |

---

##### `allocations_available`<sup>Optional</sup> <a name="allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.allocationsAvailable"></a>

```python
allocations_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#allocations_available DataPagerdutyLicenses#allocations_available}.

---

##### `current_value`<sup>Optional</sup> <a name="current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.currentValue"></a>

```python
current_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#current_value DataPagerdutyLicenses#current_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#description DataPagerdutyLicenses#description}.

---

##### `html_url`<sup>Optional</sup> <a name="html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#html_url DataPagerdutyLicenses#html_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#id DataPagerdutyLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#name DataPagerdutyLicenses#name}.

---

##### `role_group`<sup>Optional</sup> <a name="role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.roleGroup"></a>

```python
role_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#role_group DataPagerdutyLicenses#role_group}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#self DataPagerdutyLicenses#self}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#summary DataPagerdutyLicenses#summary}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#type DataPagerdutyLicenses#type}.

---

##### `valid_roles`<sup>Optional</sup> <a name="valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses.property.validRoles"></a>

```python
valid_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/pagerduty/d/licenses#valid_roles DataPagerdutyLicenses#valid_roles}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyLicensesLicensesList <a name="DataPagerdutyLicensesLicensesList" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyLicensesLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataPagerdutyLicensesLicenses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>]]

---


### DataPagerdutyLicensesLicensesOutputReference <a name="DataPagerdutyLicensesLicensesOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_licenses

dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetAllocationsAvailable">reset_allocations_available</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetCurrentValue">reset_current_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetHtmlUrl">reset_html_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetRoleGroup">reset_role_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSelfAttribute">reset_self_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetValidRoles">reset_valid_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocations_available` <a name="reset_allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetAllocationsAvailable"></a>

```python
def reset_allocations_available() -> None
```

##### `reset_current_value` <a name="reset_current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetCurrentValue"></a>

```python
def reset_current_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_html_url` <a name="reset_html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetHtmlUrl"></a>

```python
def reset_html_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_group` <a name="reset_role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetRoleGroup"></a>

```python
def reset_role_group() -> None
```

##### `reset_self_attribute` <a name="reset_self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSelfAttribute"></a>

```python
def reset_self_attribute() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_valid_roles` <a name="reset_valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.resetValidRoles"></a>

```python
def reset_valid_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailableInput">allocations_available_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValueInput">current_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrlInput">html_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroupInput">role_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttributeInput">self_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRolesInput">valid_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailable">allocations_available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValue">current_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroup">role_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRoles">valid_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocations_available_input`<sup>Optional</sup> <a name="allocations_available_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailableInput"></a>

```python
allocations_available_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_value_input`<sup>Optional</sup> <a name="current_value_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValueInput"></a>

```python
current_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `html_url_input`<sup>Optional</sup> <a name="html_url_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrlInput"></a>

```python
html_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_group_input`<sup>Optional</sup> <a name="role_group_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroupInput"></a>

```python
role_group_input: str
```

- *Type:* str

---

##### `self_attribute_input`<sup>Optional</sup> <a name="self_attribute_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttributeInput"></a>

```python
self_attribute_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `valid_roles_input`<sup>Optional</sup> <a name="valid_roles_input" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRolesInput"></a>

```python
valid_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocations_available`<sup>Required</sup> <a name="allocations_available" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.allocationsAvailable"></a>

```python
allocations_available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_value`<sup>Required</sup> <a name="current_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.currentValue"></a>

```python
current_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_group`<sup>Required</sup> <a name="role_group" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.roleGroup"></a>

```python
role_group: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `valid_roles`<sup>Required</sup> <a name="valid_roles" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.validRoles"></a>

```python
valid_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicensesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataPagerdutyLicensesLicenses, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-pagerduty.dataPagerdutyLicenses.DataPagerdutyLicensesLicenses">DataPagerdutyLicensesLicenses</a>, cdktf.IResolvable]

---



