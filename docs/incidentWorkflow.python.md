# `incidentWorkflow` Submodule <a name="`incidentWorkflow` Submodule" id="@cdktf/provider-pagerduty.incidentWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflow <a name="IncidentWorkflow" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow pagerduty_incident_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflow(
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
  description: str = None,
  id: str = None,
  step: typing.Union[IResolvable, typing.List[IncidentWorkflowStep]] = None,
  team: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#description IncidentWorkflow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#id IncidentWorkflow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]</code> | step block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.team">team</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#team IncidentWorkflow#team}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#description IncidentWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#id IncidentWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.step"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.team"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#team IncidentWorkflow#team}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep">put_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep">reset_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam">reset_team</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_step` <a name="put_step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep"></a>

```python
def put_step(
  value: typing.Union[IResolvable, typing.List[IncidentWorkflowStep]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_step` <a name="reset_step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep"></a>

```python
def reset_step() -> None
```

##### `reset_team` <a name="reset_team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam"></a>

```python
def reset_team() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IncidentWorkflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IncidentWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IncidentWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step">step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput">step_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput">team_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team">team</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step"></a>

```python
step: IncidentWorkflowStepList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `step_input`<sup>Optional</sup> <a name="step_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput"></a>

```python
step_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]

---

##### `team_input`<sup>Optional</sup> <a name="team_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput"></a>

```python
team_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team"></a>

```python
team: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowConfig <a name="IncidentWorkflowConfig" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  step: typing.Union[IResolvable, typing.List[IncidentWorkflowStep]] = None,
  team: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#description IncidentWorkflow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#id IncidentWorkflow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]</code> | step block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team">team</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#team IncidentWorkflow#team}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#description IncidentWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#id IncidentWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step"></a>

```python
step: typing.Union[IResolvable, typing.List[IncidentWorkflowStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team"></a>

```python
team: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#team IncidentWorkflow#team}.

---

### IncidentWorkflowStep <a name="IncidentWorkflowStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStep(
  action: str,
  name: str,
  inline_steps_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInput]] = None,
  input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInput]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput">inline_steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]</code> | inline_steps_input block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]</code> | input block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `inline_steps_input`<sup>Optional</sup> <a name="inline_steps_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput"></a>

```python
inline_steps_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]

inline_steps_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#inline_steps_input IncidentWorkflow#inline_steps_input}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input"></a>

```python
input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInput <a name="IncidentWorkflowStepInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInput(
  name: str,
  step: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStep]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step">step</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]</code> | step block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step"></a>

```python
step: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

### IncidentWorkflowStepInlineStepsInputStep <a name="IncidentWorkflowStepInlineStepsInputStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep(
  action: str,
  name: str,
  input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStepInput]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input">input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]</code> | input block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input"></a>

```python
input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStepInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInputStepInput <a name="IncidentWorkflowStepInlineStepsInputStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

### IncidentWorkflowStepInput <a name="IncidentWorkflowStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInput(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.15.4/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentWorkflowStepInlineStepsInputList <a name="IncidentWorkflowStepInlineStepsInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentWorkflowStepInlineStepsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]

---


### IncidentWorkflowStepInlineStepsInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep">put_step</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep">reset_step</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_step` <a name="put_step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep"></a>

```python
def put_step(
  value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStep]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]

---

##### `reset_step` <a name="reset_step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep"></a>

```python
def reset_step() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput">step_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step"></a>

```python
step: IncidentWorkflowStepInlineStepsInputStepList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `step_input`<sup>Optional</sup> <a name="step_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput"></a>

```python
step_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IncidentWorkflowStepInlineStepsInput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]

---


### IncidentWorkflowStepInlineStepsInputStepInputList <a name="IncidentWorkflowStepInlineStepsInputStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentWorkflowStepInlineStepsInputStepInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStepInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]

---


### IncidentWorkflowStepInlineStepsInputStepInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated">generated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated"></a>

```python
generated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IncidentWorkflowStepInlineStepsInputStepInput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]

---


### IncidentWorkflowStepInlineStepsInputStepList <a name="IncidentWorkflowStepInlineStepsInputStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentWorkflowStepInlineStepsInputStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]]

---


### IncidentWorkflowStepInlineStepsInputStepOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput">reset_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput"></a>

```python
def put_input(
  value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStepInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]

---

##### `reset_input` <a name="reset_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput"></a>

```python
def reset_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput">input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input"></a>

```python
input: IncidentWorkflowStepInlineStepsInputStepInputList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput"></a>

```python
input_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInputStepInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IncidentWorkflowStepInlineStepsInputStep]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>]

---


### IncidentWorkflowStepInputList <a name="IncidentWorkflowStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentWorkflowStepInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]

---


### IncidentWorkflowStepInputOutputReference <a name="IncidentWorkflowStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated">generated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated"></a>

```python
generated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IncidentWorkflowStepInput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]

---


### IncidentWorkflowStepList <a name="IncidentWorkflowStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IncidentWorkflowStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IncidentWorkflowStep]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]]

---


### IncidentWorkflowStepOutputReference <a name="IncidentWorkflowStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import incident_workflow

incidentWorkflow.IncidentWorkflowStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput">put_inline_steps_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput">reset_inline_steps_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput">reset_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inline_steps_input` <a name="put_inline_steps_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput"></a>

```python
def put_inline_steps_input(
  value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]

---

##### `put_input` <a name="put_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput"></a>

```python
def put_input(
  value: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]

---

##### `reset_inline_steps_input` <a name="reset_inline_steps_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput"></a>

```python
def reset_inline_steps_input() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput"></a>

```python
def reset_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput">inline_steps_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput">inline_steps_input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput">input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inline_steps_input`<sup>Required</sup> <a name="inline_steps_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput"></a>

```python
inline_steps_input: IncidentWorkflowStepInlineStepsInputList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input"></a>

```python
input: IncidentWorkflowStepInputList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `inline_steps_input_input`<sup>Optional</sup> <a name="inline_steps_input_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput"></a>

```python
inline_steps_input_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInlineStepsInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>]]

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput"></a>

```python
input_input: typing.Union[IResolvable, typing.List[IncidentWorkflowStepInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IncidentWorkflowStep]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>]

---



