# `automationActionsAction` Submodule <a name="`automationActionsAction` Submodule" id="@cdktf/provider-pagerduty.automationActionsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationActionsAction <a name="AutomationActionsAction" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action pagerduty_automation_actions_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_data_reference: AutomationActionsActionActionDataReference,
  action_type: str,
  name: str,
  action_classification: str = None,
  allow_invocation_from_event_orchestration: str = None,
  allow_invocation_manually: str = None,
  creation_time: str = None,
  description: str = None,
  id: str = None,
  map_to_all_services: typing.Union[bool, IResolvable] = None,
  modify_time: str = None,
  only_invocable_on_unresolved_incidents: typing.Union[bool, IResolvable] = None,
  runner_id: str = None,
  runner_type: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.actionDataReference">action_data_reference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | action_data_reference block. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#name AutomationActionsAction#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.actionClassification">action_classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.allowInvocationFromEventOrchestration">allow_invocation_from_event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_from_event_orchestration AutomationActionsAction#allow_invocation_from_event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.allowInvocationManually">allow_invocation_manually</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_manually AutomationActionsAction#allow_invocation_manually}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.creationTime">creation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#description AutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#id AutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.mapToAllServices">map_to_all_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#map_to_all_services AutomationActionsAction#map_to_all_services}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.modifyTime">modify_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.onlyInvocableOnUnresolvedIncidents">only_invocable_on_unresolved_incidents</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#only_invocable_on_unresolved_incidents AutomationActionsAction#only_invocable_on_unresolved_incidents}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.runnerId">runner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.runnerType">runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#type AutomationActionsAction#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_data_reference`<sup>Required</sup> <a name="action_data_reference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.actionDataReference"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

action_data_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_data_reference AutomationActionsAction#action_data_reference}

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.actionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#name AutomationActionsAction#name}.

---

##### `action_classification`<sup>Optional</sup> <a name="action_classification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.actionClassification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}.

---

##### `allow_invocation_from_event_orchestration`<sup>Optional</sup> <a name="allow_invocation_from_event_orchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.allowInvocationFromEventOrchestration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_from_event_orchestration AutomationActionsAction#allow_invocation_from_event_orchestration}.

---

##### `allow_invocation_manually`<sup>Optional</sup> <a name="allow_invocation_manually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.allowInvocationManually"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_manually AutomationActionsAction#allow_invocation_manually}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.creationTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#description AutomationActionsAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#id AutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `map_to_all_services`<sup>Optional</sup> <a name="map_to_all_services" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.mapToAllServices"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#map_to_all_services AutomationActionsAction#map_to_all_services}.

---

##### `modify_time`<sup>Optional</sup> <a name="modify_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.modifyTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}.

---

##### `only_invocable_on_unresolved_incidents`<sup>Optional</sup> <a name="only_invocable_on_unresolved_incidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.onlyInvocableOnUnresolvedIncidents"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#only_invocable_on_unresolved_incidents AutomationActionsAction#only_invocable_on_unresolved_incidents}.

---

##### `runner_id`<sup>Optional</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.runnerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}.

---

##### `runner_type`<sup>Optional</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.runnerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#type AutomationActionsAction#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference">put_action_data_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification">reset_action_classification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationFromEventOrchestration">reset_allow_invocation_from_event_orchestration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationManually">reset_allow_invocation_manually</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetMapToAllServices">reset_map_to_all_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime">reset_modify_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOnlyInvocableOnUnresolvedIncidents">reset_only_invocable_on_unresolved_incidents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId">reset_runner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType">reset_runner_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_data_reference` <a name="put_action_data_reference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference"></a>

```python
def put_action_data_reference(
  invocation_command: str = None,
  process_automation_job_arguments: str = None,
  process_automation_job_id: str = None,
  process_automation_node_filter: str = None,
  script: str = None
) -> None
```

###### `invocation_command`<sup>Optional</sup> <a name="invocation_command" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.invocationCommand"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}.

---

###### `process_automation_job_arguments`<sup>Optional</sup> <a name="process_automation_job_arguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.processAutomationJobArguments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}.

---

###### `process_automation_job_id`<sup>Optional</sup> <a name="process_automation_job_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.processAutomationJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}.

---

###### `process_automation_node_filter`<sup>Optional</sup> <a name="process_automation_node_filter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.processAutomationNodeFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}.

---

###### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.putActionDataReference.parameter.script"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#script AutomationActionsAction#script}.

---

##### `reset_action_classification` <a name="reset_action_classification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetActionClassification"></a>

```python
def reset_action_classification() -> None
```

##### `reset_allow_invocation_from_event_orchestration` <a name="reset_allow_invocation_from_event_orchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationFromEventOrchestration"></a>

```python
def reset_allow_invocation_from_event_orchestration() -> None
```

##### `reset_allow_invocation_manually` <a name="reset_allow_invocation_manually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetAllowInvocationManually"></a>

```python
def reset_allow_invocation_manually() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_map_to_all_services` <a name="reset_map_to_all_services" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetMapToAllServices"></a>

```python
def reset_map_to_all_services() -> None
```

##### `reset_modify_time` <a name="reset_modify_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetModifyTime"></a>

```python
def reset_modify_time() -> None
```

##### `reset_only_invocable_on_unresolved_incidents` <a name="reset_only_invocable_on_unresolved_incidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetOnlyInvocableOnUnresolvedIncidents"></a>

```python
def reset_only_invocable_on_unresolved_incidents() -> None
```

##### `reset_runner_id` <a name="reset_runner_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerId"></a>

```python
def reset_runner_id() -> None
```

##### `reset_runner_type` <a name="reset_runner_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetRunnerType"></a>

```python
def reset_runner_type() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationActionsAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationActionsAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationActionsAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationActionsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationActionsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference">action_data_reference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput">action_classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput">action_data_reference_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput">action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestrationInput">allow_invocation_from_event_orchestration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManuallyInput">allow_invocation_manually_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput">creation_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServicesInput">map_to_all_services_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput">modify_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidentsInput">only_invocable_on_unresolved_incidents_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput">runner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput">runner_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification">action_classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestration">allow_invocation_from_event_orchestration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManually">allow_invocation_manually</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServices">map_to_all_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime">modify_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidents">only_invocable_on_unresolved_incidents</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId">runner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType">runner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_data_reference`<sup>Required</sup> <a name="action_data_reference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReference"></a>

```python
action_data_reference: AutomationActionsActionActionDataReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference">AutomationActionsActionActionDataReferenceOutputReference</a>

---

##### `action_classification_input`<sup>Optional</sup> <a name="action_classification_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassificationInput"></a>

```python
action_classification_input: str
```

- *Type:* str

---

##### `action_data_reference_input`<sup>Optional</sup> <a name="action_data_reference_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionDataReferenceInput"></a>

```python
action_data_reference_input: AutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---

##### `action_type_input`<sup>Optional</sup> <a name="action_type_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionTypeInput"></a>

```python
action_type_input: str
```

- *Type:* str

---

##### `allow_invocation_from_event_orchestration_input`<sup>Optional</sup> <a name="allow_invocation_from_event_orchestration_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestrationInput"></a>

```python
allow_invocation_from_event_orchestration_input: str
```

- *Type:* str

---

##### `allow_invocation_manually_input`<sup>Optional</sup> <a name="allow_invocation_manually_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManuallyInput"></a>

```python
allow_invocation_manually_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTimeInput"></a>

```python
creation_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `map_to_all_services_input`<sup>Optional</sup> <a name="map_to_all_services_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServicesInput"></a>

```python
map_to_all_services_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `modify_time_input`<sup>Optional</sup> <a name="modify_time_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTimeInput"></a>

```python
modify_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `only_invocable_on_unresolved_incidents_input`<sup>Optional</sup> <a name="only_invocable_on_unresolved_incidents_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidentsInput"></a>

```python
only_invocable_on_unresolved_incidents_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runner_id_input`<sup>Optional</sup> <a name="runner_id_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerIdInput"></a>

```python
runner_id_input: str
```

- *Type:* str

---

##### `runner_type_input`<sup>Optional</sup> <a name="runner_type_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerTypeInput"></a>

```python
runner_type_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action_classification`<sup>Required</sup> <a name="action_classification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionClassification"></a>

```python
action_classification: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `allow_invocation_from_event_orchestration`<sup>Required</sup> <a name="allow_invocation_from_event_orchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationFromEventOrchestration"></a>

```python
allow_invocation_from_event_orchestration: str
```

- *Type:* str

---

##### `allow_invocation_manually`<sup>Required</sup> <a name="allow_invocation_manually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.allowInvocationManually"></a>

```python
allow_invocation_manually: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `map_to_all_services`<sup>Required</sup> <a name="map_to_all_services" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.mapToAllServices"></a>

```python
map_to_all_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `modify_time`<sup>Required</sup> <a name="modify_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.modifyTime"></a>

```python
modify_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `only_invocable_on_unresolved_incidents`<sup>Required</sup> <a name="only_invocable_on_unresolved_incidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.onlyInvocableOnUnresolvedIncidents"></a>

```python
only_invocable_on_unresolved_incidents: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `runner_id`<sup>Required</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerId"></a>

```python
runner_id: str
```

- *Type:* str

---

##### `runner_type`<sup>Required</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationActionsActionActionDataReference <a name="AutomationActionsActionActionDataReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsActionActionDataReference(
  invocation_command: str = None,
  process_automation_job_arguments: str = None,
  process_automation_job_id: str = None,
  process_automation_node_filter: str = None,
  script: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand">invocation_command</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments">process_automation_job_arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId">process_automation_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter">process_automation_node_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script">script</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#script AutomationActionsAction#script}. |

---

##### `invocation_command`<sup>Optional</sup> <a name="invocation_command" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.invocationCommand"></a>

```python
invocation_command: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#invocation_command AutomationActionsAction#invocation_command}.

---

##### `process_automation_job_arguments`<sup>Optional</sup> <a name="process_automation_job_arguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobArguments"></a>

```python
process_automation_job_arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_job_arguments AutomationActionsAction#process_automation_job_arguments}.

---

##### `process_automation_job_id`<sup>Optional</sup> <a name="process_automation_job_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationJobId"></a>

```python
process_automation_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_job_id AutomationActionsAction#process_automation_job_id}.

---

##### `process_automation_node_filter`<sup>Optional</sup> <a name="process_automation_node_filter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.processAutomationNodeFilter"></a>

```python
process_automation_node_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#process_automation_node_filter AutomationActionsAction#process_automation_node_filter}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference.property.script"></a>

```python
script: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#script AutomationActionsAction#script}.

---

### AutomationActionsActionConfig <a name="AutomationActionsActionConfig" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action_data_reference: AutomationActionsActionActionDataReference,
  action_type: str,
  name: str,
  action_classification: str = None,
  allow_invocation_from_event_orchestration: str = None,
  allow_invocation_manually: str = None,
  creation_time: str = None,
  description: str = None,
  id: str = None,
  map_to_all_services: typing.Union[bool, IResolvable] = None,
  modify_time: str = None,
  only_invocable_on_unresolved_incidents: typing.Union[bool, IResolvable] = None,
  runner_id: str = None,
  runner_type: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference">action_data_reference</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | action_data_reference block. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType">action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#name AutomationActionsAction#name}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification">action_classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationFromEventOrchestration">allow_invocation_from_event_orchestration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_from_event_orchestration AutomationActionsAction#allow_invocation_from_event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationManually">allow_invocation_manually</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_manually AutomationActionsAction#allow_invocation_manually}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime">creation_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#description AutomationActionsAction#description}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#id AutomationActionsAction#id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.mapToAllServices">map_to_all_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#map_to_all_services AutomationActionsAction#map_to_all_services}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime">modify_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.onlyInvocableOnUnresolvedIncidents">only_invocable_on_unresolved_incidents</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#only_invocable_on_unresolved_incidents AutomationActionsAction#only_invocable_on_unresolved_incidents}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId">runner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType">runner_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#type AutomationActionsAction#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_data_reference`<sup>Required</sup> <a name="action_data_reference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionDataReference"></a>

```python
action_data_reference: AutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

action_data_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_data_reference AutomationActionsAction#action_data_reference}

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_type AutomationActionsAction#action_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#name AutomationActionsAction#name}.

---

##### `action_classification`<sup>Optional</sup> <a name="action_classification" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.actionClassification"></a>

```python
action_classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#action_classification AutomationActionsAction#action_classification}.

---

##### `allow_invocation_from_event_orchestration`<sup>Optional</sup> <a name="allow_invocation_from_event_orchestration" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationFromEventOrchestration"></a>

```python
allow_invocation_from_event_orchestration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_from_event_orchestration AutomationActionsAction#allow_invocation_from_event_orchestration}.

---

##### `allow_invocation_manually`<sup>Optional</sup> <a name="allow_invocation_manually" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.allowInvocationManually"></a>

```python
allow_invocation_manually: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#allow_invocation_manually AutomationActionsAction#allow_invocation_manually}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#creation_time AutomationActionsAction#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#description AutomationActionsAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#id AutomationActionsAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `map_to_all_services`<sup>Optional</sup> <a name="map_to_all_services" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.mapToAllServices"></a>

```python
map_to_all_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#map_to_all_services AutomationActionsAction#map_to_all_services}.

---

##### `modify_time`<sup>Optional</sup> <a name="modify_time" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.modifyTime"></a>

```python
modify_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#modify_time AutomationActionsAction#modify_time}.

---

##### `only_invocable_on_unresolved_incidents`<sup>Optional</sup> <a name="only_invocable_on_unresolved_incidents" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.onlyInvocableOnUnresolvedIncidents"></a>

```python
only_invocable_on_unresolved_incidents: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#only_invocable_on_unresolved_incidents AutomationActionsAction#only_invocable_on_unresolved_incidents}.

---

##### `runner_id`<sup>Optional</sup> <a name="runner_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerId"></a>

```python
runner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_id AutomationActionsAction#runner_id}.

---

##### `runner_type`<sup>Optional</sup> <a name="runner_type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.runnerType"></a>

```python
runner_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#runner_type AutomationActionsAction#runner_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.29.1/docs/resources/automation_actions_action#type AutomationActionsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationActionsActionActionDataReferenceOutputReference <a name="AutomationActionsActionActionDataReferenceOutputReference" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import automation_actions_action

automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand">reset_invocation_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments">reset_process_automation_job_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId">reset_process_automation_job_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter">reset_process_automation_node_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript">reset_script</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_invocation_command` <a name="reset_invocation_command" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetInvocationCommand"></a>

```python
def reset_invocation_command() -> None
```

##### `reset_process_automation_job_arguments` <a name="reset_process_automation_job_arguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobArguments"></a>

```python
def reset_process_automation_job_arguments() -> None
```

##### `reset_process_automation_job_id` <a name="reset_process_automation_job_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationJobId"></a>

```python
def reset_process_automation_job_id() -> None
```

##### `reset_process_automation_node_filter` <a name="reset_process_automation_node_filter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetProcessAutomationNodeFilter"></a>

```python
def reset_process_automation_node_filter() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.resetScript"></a>

```python
def reset_script() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput">invocation_command_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput">process_automation_job_arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput">process_automation_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput">process_automation_node_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand">invocation_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments">process_automation_job_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId">process_automation_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter">process_automation_node_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_command_input`<sup>Optional</sup> <a name="invocation_command_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommandInput"></a>

```python
invocation_command_input: str
```

- *Type:* str

---

##### `process_automation_job_arguments_input`<sup>Optional</sup> <a name="process_automation_job_arguments_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArgumentsInput"></a>

```python
process_automation_job_arguments_input: str
```

- *Type:* str

---

##### `process_automation_job_id_input`<sup>Optional</sup> <a name="process_automation_job_id_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobIdInput"></a>

```python
process_automation_job_id_input: str
```

- *Type:* str

---

##### `process_automation_node_filter_input`<sup>Optional</sup> <a name="process_automation_node_filter_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilterInput"></a>

```python
process_automation_node_filter_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `invocation_command`<sup>Required</sup> <a name="invocation_command" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.invocationCommand"></a>

```python
invocation_command: str
```

- *Type:* str

---

##### `process_automation_job_arguments`<sup>Required</sup> <a name="process_automation_job_arguments" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobArguments"></a>

```python
process_automation_job_arguments: str
```

- *Type:* str

---

##### `process_automation_job_id`<sup>Required</sup> <a name="process_automation_job_id" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationJobId"></a>

```python
process_automation_job_id: str
```

- *Type:* str

---

##### `process_automation_node_filter`<sup>Required</sup> <a name="process_automation_node_filter" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.processAutomationNodeFilter"></a>

```python
process_automation_node_filter: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReferenceOutputReference.property.internalValue"></a>

```python
internal_value: AutomationActionsActionActionDataReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.automationActionsAction.AutomationActionsActionActionDataReference">AutomationActionsActionActionDataReference</a>

---



