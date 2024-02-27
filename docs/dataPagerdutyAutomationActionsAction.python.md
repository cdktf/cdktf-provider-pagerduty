# `dataPagerdutyAutomationActionsAction` Submodule <a name="`dataPagerdutyAutomationActionsAction` Submodule" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPagerdutyAutomationActionsAction <a name="DataPagerdutyAutomationActionsAction" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action pagerduty_automation_actions_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  action_classification: str = None,
  creation_time: str = None,
  description: str = None,
  modify_time: str = None,
  runner_id: str = None,
  runner_type: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.actionClassification">action_classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.creationTime">creation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.modifyTime">modify_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.runnerId">runner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.runnerType">runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `action_classification`<sup>Optional</sup> <a name="action_classification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.actionClassification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.creationTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}.

---

##### `modify_time`<sup>Optional</sup> <a name="modify_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.modifyTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}.

---

##### `runner_id`<sup>Optional</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.runnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}.

---

##### `runner_type`<sup>Optional</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.runnerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetActionClassification">reset_action_classification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetModifyTime">reset_modify_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerId">reset_runner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerType">reset_runner_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_action_classification` <a name="reset_action_classification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetActionClassification"></a>

```python
def reset_action_classification() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_modify_time` <a name="reset_modify_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetModifyTime"></a>

```python
def reset_modify_time() -> None
```

##### `reset_runner_id` <a name="reset_runner_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerId"></a>

```python
def reset_runner_id() -> None
```

##### `reset_runner_type` <a name="reset_runner_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetRunnerType"></a>

```python
def reset_runner_type() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataPagerdutyAutomationActionsAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataPagerdutyAutomationActionsAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataPagerdutyAutomationActionsAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataPagerdutyAutomationActionsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataPagerdutyAutomationActionsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionDataReference">action_data_reference</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList">DataPagerdutyAutomationActionsActionActionDataReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassificationInput">action_classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTimeInput">creation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTimeInput">modify_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerIdInput">runner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerTypeInput">runner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassification">action_classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTime">modify_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerId">runner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerType">runner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action_data_reference`<sup>Required</sup> <a name="action_data_reference" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionDataReference"></a>

```python
action_data_reference: DataPagerdutyAutomationActionsActionActionDataReferenceList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList">DataPagerdutyAutomationActionsActionActionDataReferenceList</a>

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `action_classification_input`<sup>Optional</sup> <a name="action_classification_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassificationInput"></a>

```python
action_classification_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTimeInput"></a>

```python
creation_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `modify_time_input`<sup>Optional</sup> <a name="modify_time_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTimeInput"></a>

```python
modify_time_input: str
```

- *Type:* str

---

##### `runner_id_input`<sup>Optional</sup> <a name="runner_id_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerIdInput"></a>

```python
runner_id_input: str
```

- *Type:* str

---

##### `runner_type_input`<sup>Optional</sup> <a name="runner_type_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerTypeInput"></a>

```python
runner_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_classification`<sup>Required</sup> <a name="action_classification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.actionClassification"></a>

```python
action_classification: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modify_time`<sup>Required</sup> <a name="modify_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.modifyTime"></a>

```python
modify_time: str
```

- *Type:* str

---

##### `runner_id`<sup>Required</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerId"></a>

```python
runner_id: str
```

- *Type:* str

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataPagerdutyAutomationActionsActionActionDataReference <a name="DataPagerdutyAutomationActionsActionActionDataReference" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference()
```


### DataPagerdutyAutomationActionsActionConfig <a name="DataPagerdutyAutomationActionsActionConfig" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  action_classification: str = None,
  creation_time: str = None,
  description: str = None,
  modify_time: str = None,
  runner_id: str = None,
  runner_type: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.actionClassification">action_classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.creationTime">creation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.modifyTime">modify_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerId">runner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerType">runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#id DataPagerdutyAutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `action_classification`<sup>Optional</sup> <a name="action_classification" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.actionClassification"></a>

```python
action_classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#action_classification DataPagerdutyAutomationActionsAction#action_classification}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#creation_time DataPagerdutyAutomationActionsAction#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#description DataPagerdutyAutomationActionsAction#description}.

---

##### `modify_time`<sup>Optional</sup> <a name="modify_time" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.modifyTime"></a>

```python
modify_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#modify_time DataPagerdutyAutomationActionsAction#modify_time}.

---

##### `runner_id`<sup>Optional</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerId"></a>

```python
runner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_id DataPagerdutyAutomationActionsAction#runner_id}.

---

##### `runner_type`<sup>Optional</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#runner_type DataPagerdutyAutomationActionsAction#runner_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.9.0/docs/data-sources/automation_actions_action#type DataPagerdutyAutomationActionsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataPagerdutyAutomationActionsActionActionDataReferenceList <a name="DataPagerdutyAutomationActionsActionActionDataReferenceList" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference <a name="DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import data_pagerduty_automation_actions_action

dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand">invocation_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments">process_automation_job_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId">process_automation_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter">process_automation_node_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference">DataPagerdutyAutomationActionsActionActionDataReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_command`<sup>Required</sup> <a name="invocation_command" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand"></a>

```python
invocation_command: str
```

- *Type:* str

---

##### `process_automation_job_arguments`<sup>Required</sup> <a name="process_automation_job_arguments" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments"></a>

```python
process_automation_job_arguments: str
```

- *Type:* str

---

##### `process_automation_job_id`<sup>Required</sup> <a name="process_automation_job_id" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId"></a>

```python
process_automation_job_id: str
```

- *Type:* str

---

##### `process_automation_node_filter`<sup>Required</sup> <a name="process_automation_node_filter" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter"></a>

```python
process_automation_node_filter: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataPagerdutyAutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.dataPagerdutyAutomationActionsAction.DataPagerdutyAutomationActionsActionActionDataReference">DataPagerdutyAutomationActionsActionActionDataReference</a>

---



