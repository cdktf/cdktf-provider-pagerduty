# `dataPagerdutyEventOrchestrationIntegration` Submodule <a name="`dataPagerdutyEventOrchestrationIntegration` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyEventOrchestrationIntegrationA <a name="DataPagerdutyEventOrchestrationIntegrationA" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration pagerduty_event_orchestration_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_orchestration: str,
  id: str = None,
  label: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.eventOrchestration">event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.eventOrchestration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetLabel">reset_label</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.resetLabel"></a>

```python
def reset_label() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyEventOrchestrationIntegrationA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyEventOrchestrationIntegrationA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyEventOrchestrationIntegrationA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyEventOrchestrationIntegrationA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList">DataPagerdutyEventOrchestrationIntegrationParametersAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestrationInput">event_orchestration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestration">event_orchestration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.label">label</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.parameters"></a>

```python
parameters: DataPagerdutyEventOrchestrationIntegrationParametersAList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList">DataPagerdutyEventOrchestrationIntegrationParametersAList</a>

---

##### `event_orchestration_input`<sup>Optional</sup> <a name="event_orchestration_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestrationInput"></a>

```python
event_orchestration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.eventOrchestration"></a>

```python
event_orchestration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.label"></a>

```python
label: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyEventOrchestrationIntegrationAConfig <a name="DataPagerdutyEventOrchestrationIntegrationAConfig" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_orchestration: str,
  id: str = None,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.eventOrchestration">event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.eventOrchestration"></a>

```python
event_orchestration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#event_orchestration DataPagerdutyEventOrchestrationIntegrationA#event_orchestration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#id DataPagerdutyEventOrchestrationIntegrationA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationAConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.24.2/docs/data-sources/event_orchestration_integration#label DataPagerdutyEventOrchestrationIntegrationA#label}.

---

### DataPagerdutyEventOrchestrationIntegrationParametersA <a name="DataPagerdutyEventOrchestrationIntegrationParametersA" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA()
```


## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyEventOrchestrationIntegrationParametersAList <a name="DataPagerdutyEventOrchestrationIntegrationParametersAList" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference <a name="DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_event_orchestration_integration

dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.routingKey">routing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA">DataPagerdutyEventOrchestrationIntegrationParametersA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `routing_key`<sup>Required</sup> <a name="routing_key" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.routingKey"></a>

```python
routing_key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersAOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyEventOrchestrationIntegrationParametersA
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyEventOrchestrationIntegration.DataPagerdutyEventOrchestrationIntegrationParametersA">DataPagerdutyEventOrchestrationIntegrationParametersA</a>

---



