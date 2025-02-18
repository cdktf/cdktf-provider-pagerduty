# `userHandoffNotificationRule` Submodule <a name="`userHandoffNotificationRule` Submodule" id="@cdktf/provider-pagerduty.userHandoffNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserHandoffNotificationRule <a name="UserHandoffNotificationRule" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule pagerduty_user_handoff_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  notify_advance_in_minutes: typing.Union[int, float],
  user_id: str,
  contact_method: typing.Union[IResolvable, typing.List[UserHandoffNotificationRuleContactMethod]] = None,
  handoff_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.notifyAdvanceInMinutes">notify_advance_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The number of minutes before the handoff to notify the user. Must be greater than or equal to 0. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.contactMethod">contact_method</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]</code> | contact_method block. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.handoffType">handoff_type</a></code> | <code>str</code> | The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notify_advance_in_minutes`<sup>Required</sup> <a name="notify_advance_in_minutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.notifyAdvanceInMinutes"></a>

- *Type:* typing.Union[int, float]

The number of minutes before the handoff to notify the user. Must be greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#notify_advance_in_minutes UserHandoffNotificationRule#notify_advance_in_minutes}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}.

---

##### `contact_method`<sup>Optional</sup> <a name="contact_method" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.contactMethod"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]

contact_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#contact_method UserHandoffNotificationRule#contact_method}

---

##### `handoff_type`<sup>Optional</sup> <a name="handoff_type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.Initializer.parameter.handoffType"></a>

- *Type:* str

The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#handoff_type UserHandoffNotificationRule#handoff_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod">put_contact_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetContactMethod">reset_contact_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetHandoffType">reset_handoff_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contact_method` <a name="put_contact_method" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod"></a>

```python
def put_contact_method(
  value: typing.Union[IResolvable, typing.List[UserHandoffNotificationRuleContactMethod]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.putContactMethod.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]

---

##### `reset_contact_method` <a name="reset_contact_method" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetContactMethod"></a>

```python
def reset_contact_method() -> None
```

##### `reset_handoff_type` <a name="reset_handoff_type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.resetHandoffType"></a>

```python
def reset_handoff_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UserHandoffNotificationRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UserHandoffNotificationRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserHandoffNotificationRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserHandoffNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserHandoffNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethod">contact_method</a></code> | <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList">UserHandoffNotificationRuleContactMethodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethodInput">contact_method_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffTypeInput">handoff_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutesInput">notify_advance_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffType">handoff_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutes">notify_advance_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_method`<sup>Required</sup> <a name="contact_method" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethod"></a>

```python
contact_method: UserHandoffNotificationRuleContactMethodList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList">UserHandoffNotificationRuleContactMethodList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `contact_method_input`<sup>Optional</sup> <a name="contact_method_input" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.contactMethodInput"></a>

```python
contact_method_input: typing.Union[IResolvable, typing.List[UserHandoffNotificationRuleContactMethod]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]

---

##### `handoff_type_input`<sup>Optional</sup> <a name="handoff_type_input" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffTypeInput"></a>

```python
handoff_type_input: str
```

- *Type:* str

---

##### `notify_advance_in_minutes_input`<sup>Optional</sup> <a name="notify_advance_in_minutes_input" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutesInput"></a>

```python
notify_advance_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `handoff_type`<sup>Required</sup> <a name="handoff_type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.handoffType"></a>

```python
handoff_type: str
```

- *Type:* str

---

##### `notify_advance_in_minutes`<sup>Required</sup> <a name="notify_advance_in_minutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.notifyAdvanceInMinutes"></a>

```python
notify_advance_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserHandoffNotificationRuleConfig <a name="UserHandoffNotificationRuleConfig" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  notify_advance_in_minutes: typing.Union[int, float],
  user_id: str,
  contact_method: typing.Union[IResolvable, typing.List[UserHandoffNotificationRuleContactMethod]] = None,
  handoff_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.notifyAdvanceInMinutes">notify_advance_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The number of minutes before the handoff to notify the user. Must be greater than or equal to 0. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.contactMethod">contact_method</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]</code> | contact_method block. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.handoffType">handoff_type</a></code> | <code>str</code> | The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notify_advance_in_minutes`<sup>Required</sup> <a name="notify_advance_in_minutes" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.notifyAdvanceInMinutes"></a>

```python
notify_advance_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes before the handoff to notify the user. Must be greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#notify_advance_in_minutes UserHandoffNotificationRule#notify_advance_in_minutes}

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#user_id UserHandoffNotificationRule#user_id}.

---

##### `contact_method`<sup>Optional</sup> <a name="contact_method" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.contactMethod"></a>

```python
contact_method: typing.Union[IResolvable, typing.List[UserHandoffNotificationRuleContactMethod]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]

contact_method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#contact_method UserHandoffNotificationRule#contact_method}

---

##### `handoff_type`<sup>Optional</sup> <a name="handoff_type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleConfig.property.handoffType"></a>

```python
handoff_type: str
```

- *Type:* str

The type of handoff to notify for. Possible values are 'both', 'oncall', 'offcall'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#handoff_type UserHandoffNotificationRule#handoff_type}

---

### UserHandoffNotificationRuleContactMethod <a name="UserHandoffNotificationRuleContactMethod" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod(
  id: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.type">type</a></code> | <code>str</code> | The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#id UserHandoffNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod.property.type"></a>

```python
type: str
```

- *Type:* str

The type of contact method to notify for. Possible values are 'email_contact_method', 'email_contact_method_reference', 'phone_contact_method', 'phone_contact_method_reference', 'push_notification_contact_method', 'push_notification_contact_method_reference', 'sms_contact_method', 'sms_contact_method_reference'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.21.0/docs/resources/user_handoff_notification_rule#type UserHandoffNotificationRule#type}

---

## Classes <a name="Classes" id="Classes"></a>

### UserHandoffNotificationRuleContactMethodList <a name="UserHandoffNotificationRuleContactMethodList" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UserHandoffNotificationRuleContactMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UserHandoffNotificationRuleContactMethod]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]]

---


### UserHandoffNotificationRuleContactMethodOutputReference <a name="UserHandoffNotificationRuleContactMethodOutputReference" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_handoff_notification_rule

userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethodOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UserHandoffNotificationRuleContactMethod]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.userHandoffNotificationRule.UserHandoffNotificationRuleContactMethod">UserHandoffNotificationRuleContactMethod</a>]

---



