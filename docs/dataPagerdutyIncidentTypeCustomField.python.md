# `dataPagerdutyIncidentTypeCustomField` Submodule <a name="`dataPagerdutyIncidentTypeCustomField` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyIncidentTypeCustomField <a name="DataPagerdutyIncidentTypeCustomField" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field pagerduty_incident_type_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  incident_type: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.incidentType">incident_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}.

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.Initializer.parameter.incidentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyIncidentTypeCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyIncidentTypeCustomField to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyIncidentTypeCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyIncidentTypeCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions">field_options</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType">field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput">incident_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType">incident_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `field_options`<sup>Required</sup> <a name="field_options" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldOptions"></a>

```python
field_options: DataPagerdutyIncidentTypeCustomFieldFieldOptionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList">DataPagerdutyIncidentTypeCustomFieldFieldOptionsList</a>

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `incident_type_input`<sup>Optional</sup> <a name="incident_type_input" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentTypeInput"></a>

```python
incident_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyIncidentTypeCustomFieldConfig <a name="DataPagerdutyIncidentTypeCustomFieldConfig" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  incident_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType">incident_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#display_name DataPagerdutyIncidentTypeCustomField#display_name}.

---

##### `incident_type`<sup>Required</sup> <a name="incident_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldConfig.property.incidentType"></a>

```python
incident_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/data-sources/incident_type_custom_field#incident_type DataPagerdutyIncidentTypeCustomField#incident_type}.

---

### DataPagerdutyIncidentTypeCustomFieldFieldOptions <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptions" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions()
```


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsData <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsData" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyIncidentTypeCustomFieldFieldOptionsData
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsData">DataPagerdutyIncidentTypeCustomFieldFieldOptionsData</a>

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsList <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsList" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference <a name="DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_incident_type_custom_field

dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data">data</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.data"></a>

```python
data: DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference">DataPagerdutyIncidentTypeCustomFieldFieldOptionsDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyIncidentTypeCustomFieldFieldOptions
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyIncidentTypeCustomField.DataPagerdutyIncidentTypeCustomFieldFieldOptions">DataPagerdutyIncidentTypeCustomFieldFieldOptions</a>

---



