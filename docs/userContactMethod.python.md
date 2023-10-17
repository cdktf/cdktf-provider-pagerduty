# `pagerduty_user_contact_method`

Refer to the Terraform Registory for docs: [`pagerduty_user_contact_method`](https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method).

# `userContactMethod` Submodule <a name="`userContactMethod` Submodule" id="@cdktf/provider-pagerduty.userContactMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserContactMethod <a name="UserContactMethod" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method pagerduty_user_contact_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_contact_method

userContactMethod.UserContactMethod(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  label: str,
  type: str,
  user_id: str,
  country_code: typing.Union[int, float] = None,
  id: str = None,
  send_short_email: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#address UserContactMethod#address}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#label UserContactMethod#label}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#type UserContactMethod#type}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#user_id UserContactMethod#user_id}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.countryCode">country_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#country_code UserContactMethod#country_code}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#id UserContactMethod#id}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.sendShortEmail">send_short_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#send_short_email UserContactMethod#send_short_email}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#address UserContactMethod#address}.

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#label UserContactMethod#label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#type UserContactMethod#type}.

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#user_id UserContactMethod#user_id}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.countryCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#country_code UserContactMethod#country_code}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#id UserContactMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_short_email`<sup>Optional</sup> <a name="send_short_email" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.Initializer.parameter.sendShortEmail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#send_short_email UserContactMethod#send_short_email}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetSendShortEmail">reset_send_short_email</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_send_short_email` <a name="reset_send_short_email" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.resetSendShortEmail"></a>

```python
def reset_send_short_email() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UserContactMethod resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_contact_method

userContactMethod.UserContactMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_contact_method

userContactMethod.UserContactMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_contact_method

userContactMethod.UserContactMethod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_contact_method

userContactMethod.UserContactMethod.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UserContactMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UserContactMethod to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UserContactMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserContactMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.blacklisted">blacklisted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.countryCodeInput">country_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.sendShortEmailInput">send_short_email_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.countryCode">country_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.sendShortEmail">send_short_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blacklisted`<sup>Required</sup> <a name="blacklisted" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.blacklisted"></a>

```python
blacklisted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.countryCodeInput"></a>

```python
country_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `send_short_email_input`<sup>Optional</sup> <a name="send_short_email_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.sendShortEmailInput"></a>

```python
send_short_email_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.countryCode"></a>

```python
country_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `send_short_email`<sup>Required</sup> <a name="send_short_email" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.sendShortEmail"></a>

```python
send_short_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserContactMethodConfig <a name="UserContactMethodConfig" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import user_contact_method

userContactMethod.UserContactMethodConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address: str,
  label: str,
  type: str,
  user_id: str,
  country_code: typing.Union[int, float] = None,
  id: str = None,
  send_short_email: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#address UserContactMethod#address}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#label UserContactMethod#label}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#type UserContactMethod#type}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#user_id UserContactMethod#user_id}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.countryCode">country_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#country_code UserContactMethod#country_code}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#id UserContactMethod#id}. |
| <code><a href="#@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.sendShortEmail">send_short_email</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#send_short_email UserContactMethod#send_short_email}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#address UserContactMethod#address}.

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#label UserContactMethod#label}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#type UserContactMethod#type}.

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#user_id UserContactMethod#user_id}.

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.countryCode"></a>

```python
country_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#country_code UserContactMethod#country_code}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#id UserContactMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `send_short_email`<sup>Optional</sup> <a name="send_short_email" id="@cdktf/provider-pagerduty.userContactMethod.UserContactMethodConfig.property.sendShortEmail"></a>

```python
send_short_email: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.2/docs/resources/user_contact_method#send_short_email UserContactMethod#send_short_email}.

---



