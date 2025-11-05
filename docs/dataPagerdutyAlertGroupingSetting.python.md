# `dataPagerdutyAlertGroupingSetting` Submodule <a name="`dataPagerdutyAlertGroupingSetting` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAlertGroupingSetting <a name="DataPagerdutyAlertGroupingSetting" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.5/docs/data-sources/alert_grouping_setting pagerduty_alert_grouping_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.5/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.5/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyAlertGroupingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyAlertGroupingSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyAlertGroupingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.5/docs/data-sources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAlertGroupingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference">DataPagerdutyAlertGroupingSettingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.config"></a>

```python
config: DataPagerdutyAlertGroupingSettingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference">DataPagerdutyAlertGroupingSettingConfigAOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAlertGroupingSettingConfig <a name="DataPagerdutyAlertGroupingSettingConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.5/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.5/docs/data-sources/alert_grouping_setting#name DataPagerdutyAlertGroupingSetting#name}.

---

### DataPagerdutyAlertGroupingSettingConfigA <a name="DataPagerdutyAlertGroupingSettingConfigA" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyAlertGroupingSettingConfigAOutputReference <a name="DataPagerdutyAlertGroupingSettingConfigAOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_alert_grouping_setting

dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregate">aggregate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.iagFields">iag_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeWindow">time_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.aggregate"></a>

```python
aggregate: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iag_fields`<sup>Required</sup> <a name="iag_fields" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.iagFields"></a>

```python
iag_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.timeWindow"></a>

```python
time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataPagerdutyAlertGroupingSettingConfigA
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.dataPagerdutyAlertGroupingSetting.DataPagerdutyAlertGroupingSettingConfigA">DataPagerdutyAlertGroupingSettingConfigA</a>

---



