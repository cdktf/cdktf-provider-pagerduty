# `eventOrchestrationServiceCacheVariable` Submodule <a name="`eventOrchestrationServiceCacheVariable` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationServiceCacheVariable <a name="EventOrchestrationServiceCacheVariable" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable pagerduty_event_orchestration_service_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration: EventOrchestrationServiceCacheVariableConfiguration,
  name: str,
  service: str,
  condition: typing.Union[IResolvable, typing.List[EventOrchestrationServiceCacheVariableCondition]] = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#configuration EventOrchestrationServiceCacheVariable#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.condition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#condition EventOrchestrationServiceCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[EventOrchestrationServiceCacheVariableCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration"></a>

```python
def put_configuration(
  type: str,
  regex: str = None,
  source: str = None,
  ttl_seconds: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}.

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}.

---

###### `ttl_seconds`<sup>Optional</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.putConfiguration.parameter.ttlSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.resetDisabled"></a>

```python
def reset_disabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventOrchestrationServiceCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventOrchestrationServiceCacheVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventOrchestrationServiceCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationServiceCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList">EventOrchestrationServiceCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference">EventOrchestrationServiceCacheVariableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.condition"></a>

```python
condition: EventOrchestrationServiceCacheVariableConditionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList">EventOrchestrationServiceCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configuration"></a>

```python
configuration: EventOrchestrationServiceCacheVariableConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference">EventOrchestrationServiceCacheVariableConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[EventOrchestrationServiceCacheVariableCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.configurationInput"></a>

```python
configuration_input: EventOrchestrationServiceCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationServiceCacheVariableCondition <a name="EventOrchestrationServiceCacheVariableCondition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#expression EventOrchestrationServiceCacheVariable#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#expression EventOrchestrationServiceCacheVariable#expression}.

---

### EventOrchestrationServiceCacheVariableConfig <a name="EventOrchestrationServiceCacheVariableConfig" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration: EventOrchestrationServiceCacheVariableConfiguration,
  name: str,
  service: str,
  condition: typing.Union[IResolvable, typing.List[EventOrchestrationServiceCacheVariableCondition]] = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.configuration"></a>

```python
configuration: EventOrchestrationServiceCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#configuration EventOrchestrationServiceCacheVariable#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#name EventOrchestrationServiceCacheVariable#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#service EventOrchestrationServiceCacheVariable#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[EventOrchestrationServiceCacheVariableCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#condition EventOrchestrationServiceCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#disabled EventOrchestrationServiceCacheVariable#disabled}.

---

### EventOrchestrationServiceCacheVariableConfiguration <a name="EventOrchestrationServiceCacheVariableConfiguration" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration(
  type: str,
  regex: str = None,
  source: str = None,
  ttl_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.ttlSeconds">ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#type EventOrchestrationServiceCacheVariable#type}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#regex EventOrchestrationServiceCacheVariable#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#source EventOrchestrationServiceCacheVariable#source}.

---

##### `ttl_seconds`<sup>Optional</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration.property.ttlSeconds"></a>

```python
ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.11.0/docs/resources/event_orchestration_service_cache_variable#ttl_seconds EventOrchestrationServiceCacheVariable#ttl_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationServiceCacheVariableConditionList <a name="EventOrchestrationServiceCacheVariableConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventOrchestrationServiceCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EventOrchestrationServiceCacheVariableCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]]

---


### EventOrchestrationServiceCacheVariableConditionOutputReference <a name="EventOrchestrationServiceCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventOrchestrationServiceCacheVariableCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableCondition">EventOrchestrationServiceCacheVariableCondition</a>]

---


### EventOrchestrationServiceCacheVariableConfigurationOutputReference <a name="EventOrchestrationServiceCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_service_cache_variable

eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetTtlSeconds">reset_ttl_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_ttl_seconds` <a name="reset_ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.resetTtlSeconds"></a>

```python
def reset_ttl_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSecondsInput">ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds">ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `ttl_seconds_input`<sup>Optional</sup> <a name="ttl_seconds_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSecondsInput"></a>

```python
ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `ttl_seconds`<sup>Required</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```python
ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EventOrchestrationServiceCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationServiceCacheVariable.EventOrchestrationServiceCacheVariableConfiguration">EventOrchestrationServiceCacheVariableConfiguration</a>

---



