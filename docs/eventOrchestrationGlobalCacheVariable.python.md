# `eventOrchestrationGlobalCacheVariable` Submodule <a name="`eventOrchestrationGlobalCacheVariable` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationGlobalCacheVariable <a name="EventOrchestrationGlobalCacheVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable pagerduty_event_orchestration_global_cache_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: EventOrchestrationGlobalCacheVariableConfiguration,
  event_orchestration: str,
  name: str,
  condition: IResolvable | typing.List[EventOrchestrationGlobalCacheVariableCondition] = None,
  disabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.eventOrchestration">event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.condition">condition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.disabled">disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#configuration EventOrchestrationGlobalCacheVariable#configuration}

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.eventOrchestration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.condition"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#condition EventOrchestrationGlobalCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.Initializer.parameter.disabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putCondition"></a>

```python
def put_condition(
  value: IResolvable | typing.List[EventOrchestrationGlobalCacheVariableCondition]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration"></a>

```python
def put_configuration(
  type: str,
  data_type: str = None,
  regex: str = None,
  source: str = None,
  ttl_seconds: typing.Union[int, float] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}.

---

###### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration.parameter.dataType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#data_type EventOrchestrationGlobalCacheVariable#data_type}.

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}.

---

###### `ttl_seconds`<sup>Optional</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.putConfiguration.parameter.ttlSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.resetDisabled"></a>

```python
def reset_disabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventOrchestrationGlobalCacheVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventOrchestrationGlobalCacheVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventOrchestrationGlobalCacheVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationGlobalCacheVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList">EventOrchestrationGlobalCacheVariableConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference">EventOrchestrationGlobalCacheVariableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.conditionInput">condition_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput">event_orchestration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabled">disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestration">event_orchestration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.condition"></a>

```python
condition: EventOrchestrationGlobalCacheVariableConditionList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList">EventOrchestrationGlobalCacheVariableConditionList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configuration"></a>

```python
configuration: EventOrchestrationGlobalCacheVariableConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference">EventOrchestrationGlobalCacheVariableConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.conditionInput"></a>

```python
condition_input: IResolvable | typing.List[EventOrchestrationGlobalCacheVariableCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.configurationInput"></a>

```python
configuration_input: EventOrchestrationGlobalCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_orchestration_input`<sup>Optional</sup> <a name="event_orchestration_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestrationInput"></a>

```python
event_orchestration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.eventOrchestration"></a>

```python
event_orchestration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationGlobalCacheVariableCondition <a name="EventOrchestrationGlobalCacheVariableCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#expression EventOrchestrationGlobalCacheVariable#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#expression EventOrchestrationGlobalCacheVariable#expression}.

---

### EventOrchestrationGlobalCacheVariableConfig <a name="EventOrchestrationGlobalCacheVariableConfig" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: EventOrchestrationGlobalCacheVariableConfiguration,
  event_orchestration: str,
  name: str,
  condition: IResolvable | typing.List[EventOrchestrationGlobalCacheVariableCondition] = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration">event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]</code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.disabled">disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.configuration"></a>

```python
configuration: EventOrchestrationGlobalCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#configuration EventOrchestrationGlobalCacheVariable#configuration}

---

##### `event_orchestration`<sup>Required</sup> <a name="event_orchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.eventOrchestration"></a>

```python
event_orchestration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#event_orchestration EventOrchestrationGlobalCacheVariable#event_orchestration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#name EventOrchestrationGlobalCacheVariable#name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.condition"></a>

```python
condition: IResolvable | typing.List[EventOrchestrationGlobalCacheVariableCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#condition EventOrchestrationGlobalCacheVariable#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfig.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#disabled EventOrchestrationGlobalCacheVariable#disabled}.

---

### EventOrchestrationGlobalCacheVariableConfiguration <a name="EventOrchestrationGlobalCacheVariableConfiguration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration(
  type: str,
  data_type: str = None,
  regex: str = None,
  source: str = None,
  ttl_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#data_type EventOrchestrationGlobalCacheVariable#data_type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.ttlSeconds">ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#type EventOrchestrationGlobalCacheVariable#type}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#data_type EventOrchestrationGlobalCacheVariable#data_type}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#regex EventOrchestrationGlobalCacheVariable#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#source EventOrchestrationGlobalCacheVariable#source}.

---

##### `ttl_seconds`<sup>Optional</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration.property.ttlSeconds"></a>

```python
ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.4/docs/resources/event_orchestration_global_cache_variable#ttl_seconds EventOrchestrationGlobalCacheVariable#ttl_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationGlobalCacheVariableConditionList <a name="EventOrchestrationGlobalCacheVariableConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EventOrchestrationGlobalCacheVariableConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[EventOrchestrationGlobalCacheVariableCondition]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>]

---


### EventOrchestrationGlobalCacheVariableConditionOutputReference <a name="EventOrchestrationGlobalCacheVariableConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EventOrchestrationGlobalCacheVariableCondition
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableCondition">EventOrchestrationGlobalCacheVariableCondition</a>

---


### EventOrchestrationGlobalCacheVariableConfigurationOutputReference <a name="EventOrchestrationGlobalCacheVariableConfigurationOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import event_orchestration_global_cache_variable

eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetTtlSeconds">reset_ttl_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_type` <a name="reset_data_type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_ttl_seconds` <a name="reset_ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.resetTtlSeconds"></a>

```python
def reset_ttl_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSecondsInput">ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds">ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `ttl_seconds_input`<sup>Optional</sup> <a name="ttl_seconds_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSecondsInput"></a>

```python
ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `ttl_seconds`<sup>Required</sup> <a name="ttl_seconds" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.ttlSeconds"></a>

```python
ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EventOrchestrationGlobalCacheVariableConfiguration
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobalCacheVariable.EventOrchestrationGlobalCacheVariableConfiguration">EventOrchestrationGlobalCacheVariableConfiguration</a>

---



