# `serviceCustomFieldValue` Submodule <a name="`serviceCustomFieldValue` Submodule" id="@cdktf/provider-pagerduty.serviceCustomFieldValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCustomFieldValue <a name="ServiceCustomFieldValue" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value pagerduty_service_custom_field_value}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValue(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_fields: typing.Union[IResolvable, typing.List[ServiceCustomFieldValueCustomFields]],
  service_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.customFields">custom_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]</code> | The custom field values to set for the service. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The ID of the service to set custom field values for. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_fields`<sup>Required</sup> <a name="custom_fields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.customFields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]

The custom field values to set for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#custom_fields ServiceCustomFieldValue#custom_fields}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.Initializer.parameter.serviceId"></a>

- *Type:* str

The ID of the service to set custom field values for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#service_id ServiceCustomFieldValue#service_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.putCustomFields">put_custom_fields</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_fields` <a name="put_custom_fields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.putCustomFields"></a>

```python
def put_custom_fields(
  value: typing.Union[IResolvable, typing.List[ServiceCustomFieldValueCustomFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.putCustomFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceCustomFieldValue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceCustomFieldValue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceCustomFieldValue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceCustomFieldValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCustomFieldValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFields">custom_fields</a></code> | <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList">ServiceCustomFieldValueCustomFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFieldsInput">custom_fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_fields`<sup>Required</sup> <a name="custom_fields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFields"></a>

```python
custom_fields: ServiceCustomFieldValueCustomFieldsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList">ServiceCustomFieldValueCustomFieldsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `custom_fields_input`<sup>Optional</sup> <a name="custom_fields_input" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.customFieldsInput"></a>

```python
custom_fields_input: typing.Union[IResolvable, typing.List[ServiceCustomFieldValueCustomFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCustomFieldValueConfig <a name="ServiceCustomFieldValueConfig" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_fields: typing.Union[IResolvable, typing.List[ServiceCustomFieldValueCustomFields]],
  service_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.customFields">custom_fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]</code> | The custom field values to set for the service. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.serviceId">service_id</a></code> | <code>str</code> | The ID of the service to set custom field values for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_fields`<sup>Required</sup> <a name="custom_fields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.customFields"></a>

```python
custom_fields: typing.Union[IResolvable, typing.List[ServiceCustomFieldValueCustomFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]

The custom field values to set for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#custom_fields ServiceCustomFieldValue#custom_fields}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The ID of the service to set custom field values for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#service_id ServiceCustomFieldValue#service_id}

---

### ServiceCustomFieldValueCustomFields <a name="ServiceCustomFieldValueCustomFields" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValueCustomFields(
  id: str,
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#id ServiceCustomFieldValue#id}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#name ServiceCustomFieldValue#name}. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#value ServiceCustomFieldValue#value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#id ServiceCustomFieldValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#name ServiceCustomFieldValue#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/service_custom_field_value#value ServiceCustomFieldValue#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCustomFieldValueCustomFieldsList <a name="ServiceCustomFieldValueCustomFieldsList" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceCustomFieldValueCustomFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceCustomFieldValueCustomFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]]

---


### ServiceCustomFieldValueCustomFieldsOutputReference <a name="ServiceCustomFieldValueCustomFieldsOutputReference" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service_custom_field_value

serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceCustomFieldValueCustomFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.serviceCustomFieldValue.ServiceCustomFieldValueCustomFields">ServiceCustomFieldValueCustomFields</a>]

---



