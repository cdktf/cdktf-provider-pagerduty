# `pagerduty_automation_actions_runner_team_association`

Refer to the Terraform Registory for docs: [`pagerduty_automation_actions_runner_team_association`](https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association).

# `automationActionsRunnerTeamAssociation` Submodule <a name="`automationActionsRunnerTeamAssociation` Submodule" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsRunnerTeamAssociation <a name="AutomationActionsRunnerTeamAssociation" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association pagerduty_automation_actions_runner_team_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner_team_association

automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  runner_id: str,
  team_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.runnerId">runner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `runner_id`<sup>Required</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.runnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.teamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner_team_association

automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner_team_association

automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner_team_association

automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerIdInput">runner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerId">runner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `runner_id_input`<sup>Optional</sup> <a name="runner_id_input" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerIdInput"></a>

```python
runner_id_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `runner_id`<sup>Required</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.runnerId"></a>

```python
runner_id: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsRunnerTeamAssociationConfig <a name="AutomationActionsRunnerTeamAssociationConfig" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_runner_team_association

automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  runner_id: str,
  team_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.runnerId">runner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.teamId">team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `runner_id`<sup>Required</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.runnerId"></a>

```python
runner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#runner_id AutomationActionsRunnerTeamAssociation#runner_id}.

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#team_id AutomationActionsRunnerTeamAssociation#team_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsRunnerTeamAssociation.AutomationActionsRunnerTeamAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/2.14.5/docs/resources/automation_actions_runner_team_association#id AutomationActionsRunnerTeamAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



