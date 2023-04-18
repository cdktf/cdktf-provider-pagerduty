# `pagerduty_automation_actions_runner`

Refer to the Terraform Registory for docs: [`pagerduty_automation_actions_runner`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner).

# `automationActionsRunner` Submodule <a name="`automationActionsRunner` Submodule" id="@cdktf/provider-pagerduty.automationActionsRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsRunner <a name="AutomationActionsRunner" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner pagerduty_automation_actions_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner

automationActionsRunner.AutomationActionsRunner(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  runner_type: str,
  description: str = None,
  id: str = None,
  last_seen: str = None,
  runbook_api_key: str = None,
  runbook_base_uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.runnerType">runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.lastSeen">last_seen</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.runbookApiKey">runbook_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.runbookBaseUri">runbook_base_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}.

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.runnerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_seen`<sup>Optional</sup> <a name="last_seen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.lastSeen"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}.

---

##### `runbook_api_key`<sup>Optional</sup> <a name="runbook_api_key" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.runbookApiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}.

---

##### `runbook_base_uri`<sup>Optional</sup> <a name="runbook_base_uri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.Initializer.parameter.runbookBaseUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetLastSeen">reset_last_seen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookApiKey">reset_runbook_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookBaseUri">reset_runbook_base_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_seen` <a name="reset_last_seen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetLastSeen"></a>

```python
def reset_last_seen() -> None
```

##### `reset_runbook_api_key` <a name="reset_runbook_api_key" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookApiKey"></a>

```python
def reset_runbook_api_key() -> None
```

##### `reset_runbook_base_uri` <a name="reset_runbook_base_uri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.resetRunbookBaseUri"></a>

```python
def reset_runbook_base_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner

automationActionsRunner.AutomationActionsRunner.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner

automationActionsRunner.AutomationActionsRunner.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner

automationActionsRunner.AutomationActionsRunner.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeenInput">last_seen_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKeyInput">runbook_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUriInput">runbook_base_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerTypeInput">runner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeen">last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKey">runbook_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUri">runbook_base_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerType">runner_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_seen_input`<sup>Optional</sup> <a name="last_seen_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeenInput"></a>

```python
last_seen_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runbook_api_key_input`<sup>Optional</sup> <a name="runbook_api_key_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKeyInput"></a>

```python
runbook_api_key_input: str
```

- *Type:* str

---

##### `runbook_base_uri_input`<sup>Optional</sup> <a name="runbook_base_uri_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUriInput"></a>

```python
runbook_base_uri_input: str
```

- *Type:* str

---

##### `runner_type_input`<sup>Optional</sup> <a name="runner_type_input" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerTypeInput"></a>

```python
runner_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_seen`<sup>Required</sup> <a name="last_seen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.lastSeen"></a>

```python
last_seen: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runbook_api_key`<sup>Required</sup> <a name="runbook_api_key" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookApiKey"></a>

```python
runbook_api_key: str
```

- *Type:* str

---

##### `runbook_base_uri`<sup>Required</sup> <a name="runbook_base_uri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runbookBaseUri"></a>

```python
runbook_base_uri: str
```

- *Type:* str

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunner.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsRunnerConfig <a name="AutomationActionsRunnerConfig" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner

automationActionsRunner.AutomationActionsRunnerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  runner_type: str,
  description: str = None,
  id: str = None,
  last_seen: str = None,
  runbook_api_key: str = None,
  runbook_base_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runnerType">runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lastSeen">last_seen</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookApiKey">runbook_api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookBaseUri">runbook_base_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#name AutomationActionsRunner#name}.

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runner_type AutomationActionsRunner#runner_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#description AutomationActionsRunner#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#id AutomationActionsRunner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_seen`<sup>Optional</sup> <a name="last_seen" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.lastSeen"></a>

```python
last_seen: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#last_seen AutomationActionsRunner#last_seen}.

---

##### `runbook_api_key`<sup>Optional</sup> <a name="runbook_api_key" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookApiKey"></a>

```python
runbook_api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_api_key AutomationActionsRunner#runbook_api_key}.

---

##### `runbook_base_uri`<sup>Optional</sup> <a name="runbook_base_uri" id="@cdktf/provider-pagerduty.automationActionsRunner.AutomationActionsRunnerConfig.property.runbookBaseUri"></a>

```python
runbook_base_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.2/docs/resources/automation_actions_runner#runbook_base_uri AutomationActionsRunner#runbook_base_uri}.

---



