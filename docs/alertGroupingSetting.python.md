# `alertGroupingSetting` Submodule <a name="`alertGroupingSetting` Submodule" id="@cdktf/provider-pagerduty.alertGroupingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertGroupingSetting <a name="AlertGroupingSetting" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting pagerduty_alert_grouping_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSetting(
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
  services: typing.List[str],
  type: str,
  config: AlertGroupingSettingConfigA = None,
  description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.services">services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}.

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.services"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#config AlertGroupingSetting#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetDescription">reset_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig"></a>

```python
def put_config(
  aggregate: str = None,
  fields: typing.List[str] = None,
  timeout: typing.Union[int, float] = None,
  time_window: typing.Union[int, float] = None
) -> None
```

###### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig.parameter.aggregate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}.

---

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}.

---

###### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig.parameter.timeWindow"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetDescription"></a>

```python
def reset_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlertGroupingSetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlertGroupingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertGroupingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference">AlertGroupingSettingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.configInput">config_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.config"></a>

```python
config: AlertGroupingSettingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference">AlertGroupingSettingConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.configInput"></a>

```python
config_input: typing.Union[AlertGroupingSettingConfigA, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertGroupingSettingConfig <a name="AlertGroupingSettingConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  services: typing.List[str],
  type: str,
  config: AlertGroupingSettingConfigA = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.services">services</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}.

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.config"></a>

```python
config: AlertGroupingSettingConfigA
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#config AlertGroupingSetting#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}.

---

### AlertGroupingSettingConfigA <a name="AlertGroupingSettingConfigA" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSettingConfigA(
  aggregate: str = None,
  fields: typing.List[str] = None,
  timeout: typing.Union[int, float] = None,
  time_window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.aggregate">aggregate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeWindow">time_window</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}. |

---

##### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.aggregate"></a>

```python
aggregate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}.

---

##### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeWindow"></a>

```python
time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.16.0/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertGroupingSettingConfigAOutputReference <a name="AlertGroupingSettingConfigAOutputReference" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import alert_grouping_setting

alertGroupingSetting.AlertGroupingSettingConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetAggregate">reset_aggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeWindow">reset_time_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregate` <a name="reset_aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetAggregate"></a>

```python
def reset_aggregate() -> None
```

##### `reset_fields` <a name="reset_fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_time_window` <a name="reset_time_window" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeWindow"></a>

```python
def reset_time_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregateInput">aggregate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindowInput">time_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregate">aggregate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindow">time_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregate_input`<sup>Optional</sup> <a name="aggregate_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregateInput"></a>

```python
aggregate_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window_input`<sup>Optional</sup> <a name="time_window_input" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindowInput"></a>

```python
time_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregate"></a>

```python
aggregate: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindow"></a>

```python
time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AlertGroupingSettingConfigA, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>, cdktf.IResolvable]

---



