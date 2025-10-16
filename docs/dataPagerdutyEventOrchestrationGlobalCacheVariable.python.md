# `dataPagerdutyEventOrchestrationGlobalCacheVariable` Submodule <a name="`dataPagerdutyEventOrchestrationGlobalCacheVariable` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariable <a name="DataPagerdutyEventOrchestrationGlobalCacheVariable" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_orchestration: str,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.eventOrchestration">event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.eventOrchestration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyEventOrchestrationGlobalCacheVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyEventOrchestrationGlobalCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationGlobalCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList">DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList">DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput">event_orchestration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestration">event_orchestration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.condition"></a>

```python
condition: DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList">DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.configuration"></a>

```python
configuration: DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList">DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_orchestration_input`<sup>Optional</sup> <a name="event_orchestration_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput"></a>

```python
event_orchestration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.eventOrchestration"></a>

```python
event_orchestration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariableCondition <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableCondition" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition()
```


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfig <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  event_orchestration: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration">event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration"></a>

```python
event_orchestration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#event_orchestration DataPagerdutyEventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#id DataPagerdutyEventOrchestrationGlobalCacheVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/data-sources/event_orchestration_global_cache_variable#name DataPagerdutyEventOrchestrationGlobalCacheVariable#name}.

---

### DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition">DataPagerdutyEventOrchestrationGlobalCacheVariableCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyEventOrchestrationGlobalCacheVariableCondition
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableCondition">DataPagerdutyEventOrchestrationGlobalCacheVariableCondition</a>

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference <a name="DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_global_cache_variable

dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds">ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration">DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `ttl_seconds`<sup>Required</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```python
ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationGlobalCacheVariable.DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration">DataPagerdutyEventOrchestrationGlobalCacheVariableConfiguration</a>

---



