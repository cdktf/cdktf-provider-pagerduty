# `escalationPolicy` Submodule <a name="`escalationPolicy` Submodule" id="@cdktf/provider-pagerduty.escalationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EscalationPolicy <a name="EscalationPolicy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy pagerduty_escalation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicy(
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
  rule: typing.Union[IResolvable, typing.List[EscalationPolicyRule]],
  description: str = None,
  id: str = None,
  num_loops: typing.Union[int, float] = None,
  teams: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#name EscalationPolicy#name}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#description EscalationPolicy#description}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.numLoops">num_loops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#teams EscalationPolicy#teams}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#name EscalationPolicy#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#rule EscalationPolicy#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#description EscalationPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `num_loops`<sup>Optional</sup> <a name="num_loops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.numLoops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.Initializer.parameter.teams"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#teams EscalationPolicy#teams}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetNumLoops">reset_num_loops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[EscalationPolicyRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_num_loops` <a name="reset_num_loops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetNumLoops"></a>

```python
def reset_num_loops() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.resetTeams"></a>

```python
def reset_teams() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EscalationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EscalationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EscalationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EscalationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList">EscalationPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoopsInput">num_loops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoops">num_loops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.rule"></a>

```python
rule: EscalationPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList">EscalationPolicyRuleList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `num_loops_input`<sup>Optional</sup> <a name="num_loops_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoopsInput"></a>

```python
num_loops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[EscalationPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_loops`<sup>Required</sup> <a name="num_loops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.numLoops"></a>

```python
num_loops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EscalationPolicyConfig <a name="EscalationPolicyConfig" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rule: typing.Union[IResolvable, typing.List[EscalationPolicyRule]],
  description: str = None,
  id: str = None,
  num_loops: typing.Union[int, float] = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#name EscalationPolicy#name}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#description EscalationPolicy#description}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.numLoops">num_loops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#teams EscalationPolicy#teams}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#name EscalationPolicy#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[EscalationPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#rule EscalationPolicy#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#description EscalationPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `num_loops`<sup>Optional</sup> <a name="num_loops" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.numLoops"></a>

```python
num_loops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#num_loops EscalationPolicy#num_loops}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyConfig.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#teams EscalationPolicy#teams}.

---

### EscalationPolicyRule <a name="EscalationPolicyRule" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRule(
  escalation_delay_in_minutes: typing.Union[int, float],
  target: typing.Union[IResolvable, typing.List[EscalationPolicyRuleTarget]],
  escalation_rule_assignment_strategy: EscalationPolicyRuleEscalationRuleAssignmentStrategy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationDelayInMinutes">escalation_delay_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.target">target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]</code> | target block. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationRuleAssignmentStrategy">escalation_rule_assignment_strategy</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | escalation_rule_assignment_strategy block. |

---

##### `escalation_delay_in_minutes`<sup>Required</sup> <a name="escalation_delay_in_minutes" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationDelayInMinutes"></a>

```python
escalation_delay_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#escalation_delay_in_minutes EscalationPolicy#escalation_delay_in_minutes}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.target"></a>

```python
target: typing.Union[IResolvable, typing.List[EscalationPolicyRuleTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#target EscalationPolicy#target}

---

##### `escalation_rule_assignment_strategy`<sup>Optional</sup> <a name="escalation_rule_assignment_strategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule.property.escalationRuleAssignmentStrategy"></a>

```python
escalation_rule_assignment_strategy: EscalationPolicyRuleEscalationRuleAssignmentStrategy
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

escalation_rule_assignment_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#escalation_rule_assignment_strategy EscalationPolicy#escalation_rule_assignment_strategy}

---

### EscalationPolicyRuleEscalationRuleAssignmentStrategy <a name="EscalationPolicyRuleEscalationRuleAssignmentStrategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#type EscalationPolicy#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

### EscalationPolicyRuleTarget <a name="EscalationPolicyRuleTarget" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleTarget(
  id: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#id EscalationPolicy#id}. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#type EscalationPolicy#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#id EscalationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference <a name="EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference.property.internalValue"></a>

```python
internal_value: EscalationPolicyRuleEscalationRuleAssignmentStrategy
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---


### EscalationPolicyRuleList <a name="EscalationPolicyRuleList" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EscalationPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EscalationPolicyRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]]

---


### EscalationPolicyRuleOutputReference <a name="EscalationPolicyRuleOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy">put_escalation_rule_assignment_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resetEscalationRuleAssignmentStrategy">reset_escalation_rule_assignment_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_escalation_rule_assignment_strategy` <a name="put_escalation_rule_assignment_strategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy"></a>

```python
def put_escalation_rule_assignment_strategy(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putEscalationRuleAssignmentStrategy.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.0/docs/resources/escalation_policy#type EscalationPolicy#type}.

---

##### `put_target` <a name="put_target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget"></a>

```python
def put_target(
  value: typing.Union[IResolvable, typing.List[EscalationPolicyRuleTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.putTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]

---

##### `reset_escalation_rule_assignment_strategy` <a name="reset_escalation_rule_assignment_strategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.resetEscalationRuleAssignmentStrategy"></a>

```python
def reset_escalation_rule_assignment_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategy">escalation_rule_assignment_strategy</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference">EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList">EscalationPolicyRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutesInput">escalation_delay_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategyInput">escalation_rule_assignment_strategy_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutes">escalation_delay_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `escalation_rule_assignment_strategy`<sup>Required</sup> <a name="escalation_rule_assignment_strategy" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategy"></a>

```python
escalation_rule_assignment_strategy: EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference">EscalationPolicyRuleEscalationRuleAssignmentStrategyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.target"></a>

```python
target: EscalationPolicyRuleTargetList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList">EscalationPolicyRuleTargetList</a>

---

##### `escalation_delay_in_minutes_input`<sup>Optional</sup> <a name="escalation_delay_in_minutes_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutesInput"></a>

```python
escalation_delay_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `escalation_rule_assignment_strategy_input`<sup>Optional</sup> <a name="escalation_rule_assignment_strategy_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationRuleAssignmentStrategyInput"></a>

```python
escalation_rule_assignment_strategy_input: EscalationPolicyRuleEscalationRuleAssignmentStrategy
```

- *Type:* <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleEscalationRuleAssignmentStrategy">EscalationPolicyRuleEscalationRuleAssignmentStrategy</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[IResolvable, typing.List[EscalationPolicyRuleTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]

---

##### `escalation_delay_in_minutes`<sup>Required</sup> <a name="escalation_delay_in_minutes" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.escalationDelayInMinutes"></a>

```python
escalation_delay_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EscalationPolicyRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRule">EscalationPolicyRule</a>]

---


### EscalationPolicyRuleTargetList <a name="EscalationPolicyRuleTargetList" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EscalationPolicyRuleTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EscalationPolicyRuleTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]]

---


### EscalationPolicyRuleTargetOutputReference <a name="EscalationPolicyRuleTargetOutputReference" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import escalation_policy

escalationPolicy.EscalationPolicyRuleTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EscalationPolicyRuleTarget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.escalationPolicy.EscalationPolicyRuleTarget">EscalationPolicyRuleTarget</a>]

---



