# `dataPagerdutyEventOrchestrationServiceCacheVariable` Submodule <a name="`dataPagerdutyEventOrchestrationServiceCacheVariable` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariable <a name="DataPagerdutyEventOrchestrationServiceCacheVariable" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable pagerduty_event_orchestration_service_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyEventOrchestrationServiceCacheVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyEventOrchestrationServiceCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationServiceCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList">DataPagerdutyEventOrchestrationServiceCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList">DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.condition"></a>

```python
condition: DataPagerdutyEventOrchestrationServiceCacheVariableConditionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList">DataPagerdutyEventOrchestrationServiceCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.configuration"></a>

```python
configuration: DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList">DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariableCondition <a name="DataPagerdutyEventOrchestrationServiceCacheVariableCondition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition()
```


### DataPagerdutyEventOrchestrationServiceCacheVariableConfig <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#service DataPagerdutyEventOrchestrationServiceCacheVariable#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#id DataPagerdutyEventOrchestrationServiceCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.18.0/docs/data-sources/event_orchestration_service_cache_variable#name DataPagerdutyEventOrchestrationServiceCacheVariable#name}.

---

### DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationServiceCacheVariableConditionList <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConditionList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition">DataPagerdutyEventOrchestrationServiceCacheVariableCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyEventOrchestrationServiceCacheVariableCondition
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableCondition">DataPagerdutyEventOrchestrationServiceCacheVariableCondition</a>

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference <a name="DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_service_cache_variable

dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds">ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration">DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `ttl_seconds`<sup>Required</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```python
ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationServiceCacheVariable.DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration">DataPagerdutyEventOrchestrationServiceCacheVariableConfiguration</a>

---



