# `dataPagerdutyStandardsResourcesScores` Submodule <a name="`dataPagerdutyStandardsResourcesScores` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyStandardsResourcesScores <a name="DataPagerdutyStandardsResourcesScores" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores pagerduty_standards_resources_scores}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ids: typing.List[str],
  resource_type: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.ids"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyStandardsResourcesScores resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyStandardsResourcesScores to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyStandardsResourcesScores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyStandardsResourcesScores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList">DataPagerdutyStandardsResourcesScoresResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resources"></a>

```python
resources: DataPagerdutyStandardsResourcesScoresResourcesList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList">DataPagerdutyStandardsResourcesScoresResourcesList</a>

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScores.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyStandardsResourcesScoresConfig <a name="DataPagerdutyStandardsResourcesScoresConfig" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ids: typing.List[str],
  resource_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#ids DataPagerdutyStandardsResourcesScores#ids}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.1/docs/data-sources/standards_resources_scores#resource_type DataPagerdutyStandardsResourcesScores#resource_type}.

---

### DataPagerdutyStandardsResourcesScoresResources <a name="DataPagerdutyStandardsResourcesScoresResources" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources()
```


### DataPagerdutyStandardsResourcesScoresResourcesScore <a name="DataPagerdutyStandardsResourcesScoresResourcesScore" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore()
```


### DataPagerdutyStandardsResourcesScoresResourcesStandards <a name="DataPagerdutyStandardsResourcesScoresResourcesStandards" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyStandardsResourcesScoresResourcesList <a name="DataPagerdutyStandardsResourcesScoresResourcesList" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyStandardsResourcesScoresResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyStandardsResourcesScoresResourcesOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.score">score</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference">DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.standards">standards</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList">DataPagerdutyStandardsResourcesScoresResourcesStandardsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources">DataPagerdutyStandardsResourcesScoresResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.score"></a>

```python
score: DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference">DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference</a>

---

##### `standards`<sup>Required</sup> <a name="standards" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.standards"></a>

```python
standards: DataPagerdutyStandardsResourcesScoresResourcesStandardsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList">DataPagerdutyStandardsResourcesScoresResourcesStandardsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyStandardsResourcesScoresResources
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResources">DataPagerdutyStandardsResourcesScoresResources</a>

---


### DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.passing">passing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.total">total</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore">DataPagerdutyStandardsResourcesScoresResourcesScore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `passing`<sup>Required</sup> <a name="passing" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.passing"></a>

```python
passing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.total"></a>

```python
total: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScoreOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyStandardsResourcesScoresResourcesScore
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesScore">DataPagerdutyStandardsResourcesScoresResourcesScore</a>

---


### DataPagerdutyStandardsResourcesScoresResourcesStandardsList <a name="DataPagerdutyStandardsResourcesScoresResourcesStandardsList" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference <a name="DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_standards_resources_scores

dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.pass">pass</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards">DataPagerdutyStandardsResourcesScoresResourcesStandards</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pass`<sup>Required</sup> <a name="pass" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.pass"></a>

```python
pass: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandardsOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyStandardsResourcesScoresResourcesStandards
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyStandardsResourcesScores.DataPagerdutyStandardsResourcesScoresResourcesStandards">DataPagerdutyStandardsResourcesScoresResourcesStandards</a>

---



