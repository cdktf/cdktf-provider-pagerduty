# `serviceCustomField` Submodule <a name="`serviceCustomField` Submodule" id="@cdktf/provider-pagerduty.serviceCustomField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomField <a name="ServiceCustomField" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field pagerduty_service_custom_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomField(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_type: str,
  display_name: str,
  field_type: str,
  name: str,
  default_value: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  field_option: typing.Union[IResolvable, typing.List[ServiceCustomFieldFieldOption]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dataType">data_type</a></code> | <code>str</code> | The kind of data the custom field is allowed to contain. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the field. This must be unique across an account. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldType">field_type</a></code> | <code>str</code> | The type of data this field contains. In combination with the `data_type` field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.defaultValue">default_value</a></code> | <code>str</code> | Default value for the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the data this field contains. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the field is enabled. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldOption">field_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]</code> | field_option block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.dataType"></a>

- *Type:* str

The kind of data the custom field is allowed to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#display_name ServiceCustomField#display_name}

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldType"></a>

- *Type:* str

The type of data this field contains. In combination with the `data_type` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#field_type ServiceCustomField#field_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.name"></a>

- *Type:* str

The name of the field.

May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#name ServiceCustomField#name}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.defaultValue"></a>

- *Type:* str

Default value for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#default_value ServiceCustomField#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.description"></a>

- *Type:* str

A description of the data this field contains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#description ServiceCustomField#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the field is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#enabled ServiceCustomField#enabled}

---

##### `field_option`<sup>Optional</sup> <a name="field_option" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.Initializer.parameter.fieldOption"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]

field_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#field_option ServiceCustomField#field_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption">put_field_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetFieldOption">reset_field_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_field_option` <a name="put_field_option" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption"></a>

```python
def put_field_option(
  value: typing.Union[IResolvable, typing.List[ServiceCustomFieldFieldOption]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.putFieldOption.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_field_option` <a name="reset_field_option" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.resetFieldOption"></a>

```python
def reset_field_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomField.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomField.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceCustomField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceCustomField to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceCustomField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCustomField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOption">field_option</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList">ServiceCustomFieldFieldOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.selfAttribute">self_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOptionInput">field_option_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldTypeInput">field_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldType">field_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `field_option`<sup>Required</sup> <a name="field_option" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOption"></a>

```python
field_option: ServiceCustomFieldFieldOptionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList">ServiceCustomFieldFieldOptionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.selfAttribute"></a>

```python
self_attribute: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_option_input`<sup>Optional</sup> <a name="field_option_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldOptionInput"></a>

```python
field_option_input: typing.Union[IResolvable, typing.List[ServiceCustomFieldFieldOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]

---

##### `field_type_input`<sup>Optional</sup> <a name="field_type_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldTypeInput"></a>

```python
field_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomFieldConfig <a name="ServiceCustomFieldConfig" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomFieldConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_type: str,
  display_name: str,
  field_type: str,
  name: str,
  default_value: str = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  field_option: typing.Union[IResolvable, typing.List[ServiceCustomFieldFieldOption]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dataType">data_type</a></code> | <code>str</code> | The kind of data the custom field is allowed to contain. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the field. This must be unique across an account. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldType">field_type</a></code> | <code>str</code> | The type of data this field contains. In combination with the `data_type` field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.name">name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.defaultValue">default_value</a></code> | <code>str</code> | Default value for the field. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.description">description</a></code> | <code>str</code> | A description of the data this field contains. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the field is enabled. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldOption">field_option</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]</code> | field_option block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

The kind of data the custom field is allowed to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the field. This must be unique across an account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#display_name ServiceCustomField#display_name}

---

##### `field_type`<sup>Required</sup> <a name="field_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldType"></a>

```python
field_type: str
```

- *Type:* str

The type of data this field contains. In combination with the `data_type` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#field_type ServiceCustomField#field_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the field.

May include ASCII characters, specifically lowercase letters, digits, and underescores. The `name` for a Field must be unique and cannot be changed once created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#name ServiceCustomField#name}

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Default value for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#default_value ServiceCustomField#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the data this field contains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#description ServiceCustomField#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the field is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#enabled ServiceCustomField#enabled}

---

##### `field_option`<sup>Optional</sup> <a name="field_option" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldConfig.property.fieldOption"></a>

```python
field_option: typing.Union[IResolvable, typing.List[ServiceCustomFieldFieldOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]

field_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#field_option ServiceCustomField#field_option}

---

### ServiceCustomFieldFieldOption <a name="ServiceCustomFieldFieldOption" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomFieldFieldOption(
  data_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#value ServiceCustomField#value}. |

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#data_type ServiceCustomField#data_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.25.1/docs/resources/service_custom_field#value ServiceCustomField#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCustomFieldFieldOptionList <a name="ServiceCustomFieldFieldOptionList" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomFieldFieldOptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceCustomFieldFieldOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceCustomFieldFieldOption]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]]

---


### ServiceCustomFieldFieldOptionOutputReference <a name="ServiceCustomFieldFieldOptionOutputReference" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field

serviceCustomField.ServiceCustomFieldFieldOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOptionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceCustomFieldFieldOption]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceCustomField.ServiceCustomFieldFieldOption">ServiceCustomFieldFieldOption</a>]

---



