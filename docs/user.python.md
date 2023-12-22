# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-pagerduty.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-pagerduty.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user pagerduty_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  color: str = None,
  description: str = None,
  id: str = None,
  job_title: str = None,
  license: str = None,
  role: str = None,
  teams: typing.List[str] = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#email User#email}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#name User#name}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.color">color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#color User#color}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#description User#description}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#job_title User#job_title}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.license">license</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#license User#license}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#role User#role}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#teams User#teams}. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#time_zone User#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#email User#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#name User#name}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.color"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#color User#color}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#description User#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.jobTitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#job_title User#job_title}.

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.license"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#license User#license}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#role User#role}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.teams"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#teams User#teams}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-pagerduty.user.User.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#time_zone User#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetColor">reset_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetJobTitle">reset_job_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetLicense">reset_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetTeams">reset_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.user.User.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.user.User.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.user.User.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.user.User.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.user.User.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_color` <a name="reset_color" id="@cdktf/provider-pagerduty.user.User.resetColor"></a>

```python
def reset_color() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.user.User.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_title` <a name="reset_job_title" id="@cdktf/provider-pagerduty.user.User.resetJobTitle"></a>

```python
def reset_job_title() -> None
```

##### `reset_license` <a name="reset_license" id="@cdktf/provider-pagerduty.user.User.resetLicense"></a>

```python
def reset_license() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-pagerduty.user.User.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-pagerduty.user.User.resetTeams"></a>

```python
def reset_teams() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-pagerduty.user.User.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import user

user.User.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.avatarUrl">avatar_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.invitationSent">invitation_sent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.colorInput">color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.jobTitleInput">job_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.licenseInput">license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.color">color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `avatar_url`<sup>Required</sup> <a name="avatar_url" id="@cdktf/provider-pagerduty.user.User.property.avatarUrl"></a>

```python
avatar_url: str
```

- *Type:* str

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-pagerduty.user.User.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `invitation_sent`<sup>Required</sup> <a name="invitation_sent" id="@cdktf/provider-pagerduty.user.User.property.invitationSent"></a>

```python
invitation_sent: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `color_input`<sup>Optional</sup> <a name="color_input" id="@cdktf/provider-pagerduty.user.User.property.colorInput"></a>

```python
color_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.user.User.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-pagerduty.user.User.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_title_input`<sup>Optional</sup> <a name="job_title_input" id="@cdktf/provider-pagerduty.user.User.property.jobTitleInput"></a>

```python
job_title_input: str
```

- *Type:* str

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="@cdktf/provider-pagerduty.user.User.property.licenseInput"></a>

```python
license_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.user.User.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-pagerduty.user.User.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-pagerduty.user.User.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-pagerduty.user.User.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-pagerduty.user.User.property.color"></a>

```python
color: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.user.User.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-pagerduty.user.User.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="@cdktf/provider-pagerduty.user.User.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-pagerduty.user.User.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.user.User.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-pagerduty.user.User.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-pagerduty.user.User.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-pagerduty.user.User.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-pagerduty.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  color: str = None,
  description: str = None,
  id: str = None,
  job_title: str = None,
  license: str = None,
  role: str = None,
  teams: typing.List[str] = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#email User#email}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#name User#name}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.color">color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#color User#color}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#description User#description}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.jobTitle">job_title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#job_title User#job_title}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.license">license</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#license User#license}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#role User#role}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#teams User#teams}. |
| <code><a href="#@cdktf/provider-pagerduty.user.UserConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#time_zone User#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-pagerduty.user.UserConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#email User#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.user.UserConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#name User#name}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-pagerduty.user.UserConfig.property.color"></a>

```python
color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#color User#color}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.user.UserConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#description User#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_title`<sup>Optional</sup> <a name="job_title" id="@cdktf/provider-pagerduty.user.UserConfig.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#job_title User#job_title}.

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-pagerduty.user.UserConfig.property.license"></a>

```python
license: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#license User#license}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-pagerduty.user.UserConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#role User#role}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-pagerduty.user.UserConfig.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#teams User#teams}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-pagerduty.user.UserConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.4.0/docs/resources/user#time_zone User#time_zone}.

---



