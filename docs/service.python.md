# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-pagerduty.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-pagerduty.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service pagerduty_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.Service.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.Service(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  escalation_policy: str,
  name: str,
  acknowledgement_timeout: str = None,
  alert_creation: str = None,
  alert_grouping: str = None,
  alert_grouping_parameters: ServiceAlertGroupingParameters = None,
  alert_grouping_timeout: str = None,
  auto_pause_notifications_parameters: ServiceAutoPauseNotificationsParameters = None,
  auto_resolve_timeout: str = None,
  description: str = None,
  id: str = None,
  incident_urgency_rule: ServiceIncidentUrgencyRule = None,
  response_play: str = None,
  scheduled_actions: IResolvable | typing.List[ServiceScheduledActions] = None,
  support_hours: ServiceSupportHours = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.escalationPolicy">escalation_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.acknowledgementTimeout">acknowledgement_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertCreation">alert_creation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGrouping">alert_grouping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingParameters">alert_grouping_parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingTimeout">alert_grouping_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoPauseNotificationsParameters">auto_pause_notifications_parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoResolveTimeout">auto_resolve_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.incidentUrgencyRule">incident_urgency_rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.responsePlay">response_play</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scheduledActions">scheduled_actions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]</code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.supportHours">support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `escalation_policy`<sup>Required</sup> <a name="escalation_policy" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.escalationPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#name Service#name}.

---

##### `acknowledgement_timeout`<sup>Optional</sup> <a name="acknowledgement_timeout" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.acknowledgementTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `alert_creation`<sup>Optional</sup> <a name="alert_creation" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertCreation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `alert_grouping`<sup>Optional</sup> <a name="alert_grouping" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGrouping"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `alert_grouping_parameters`<sup>Optional</sup> <a name="alert_grouping_parameters" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingParameters"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `alert_grouping_timeout`<sup>Optional</sup> <a name="alert_grouping_timeout" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `auto_pause_notifications_parameters`<sup>Optional</sup> <a name="auto_pause_notifications_parameters" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoPauseNotificationsParameters"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `auto_resolve_timeout`<sup>Optional</sup> <a name="auto_resolve_timeout" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoResolveTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#description Service#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident_urgency_rule`<sup>Optional</sup> <a name="incident_urgency_rule" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.incidentUrgencyRule"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `response_play`<sup>Optional</sup> <a name="response_play" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.responsePlay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#response_play Service#response_play}.

---

##### `scheduled_actions`<sup>Optional</sup> <a name="scheduled_actions" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scheduledActions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `support_hours`<sup>Optional</sup> <a name="support_hours" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.supportHours"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#support_hours Service#support_hours}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters">put_alert_grouping_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters">put_auto_pause_notifications_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule">put_incident_urgency_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putScheduledActions">put_scheduled_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putSupportHours">put_support_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout">reset_acknowledgement_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertCreation">reset_alert_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGrouping">reset_alert_grouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters">reset_alert_grouping_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout">reset_alert_grouping_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters">reset_auto_pause_notifications_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout">reset_auto_resolve_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule">reset_incident_urgency_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetResponsePlay">reset_response_play</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetScheduledActions">reset_scheduled_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetSupportHours">reset_support_hours</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-pagerduty.service.Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-pagerduty.service.Service.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-pagerduty.service.Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-pagerduty.service.Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-pagerduty.service.Service.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-pagerduty.service.Service.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-pagerduty.service.Service.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-pagerduty.service.Service.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-pagerduty.service.Service.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alert_grouping_parameters` <a name="put_alert_grouping_parameters" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters"></a>

```python
def put_alert_grouping_parameters(
  config: ServiceAlertGroupingParametersConfig = None,
  type: str = None
) -> None
```

###### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#config Service#config}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

##### `put_auto_pause_notifications_parameters` <a name="put_auto_pause_notifications_parameters" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters"></a>

```python
def put_auto_pause_notifications_parameters(
  enabled: bool | IResolvable = None,
  timeout: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#enabled Service#enabled}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#timeout Service#timeout}.

---

##### `put_incident_urgency_rule` <a name="put_incident_urgency_rule" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule"></a>

```python
def put_incident_urgency_rule(
  type: str,
  during_support_hours: ServiceIncidentUrgencyRuleDuringSupportHours = None,
  outside_support_hours: ServiceIncidentUrgencyRuleOutsideSupportHours = None,
  urgency: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

###### `during_support_hours`<sup>Optional</sup> <a name="during_support_hours" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.duringSupportHours"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

during_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#during_support_hours Service#during_support_hours}

---

###### `outside_support_hours`<sup>Optional</sup> <a name="outside_support_hours" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.outsideSupportHours"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

outside_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#outside_support_hours Service#outside_support_hours}

---

###### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.urgency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}.

---

##### `put_scheduled_actions` <a name="put_scheduled_actions" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions"></a>

```python
def put_scheduled_actions(
  value: IResolvable | typing.List[ServiceScheduledActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]

---

##### `put_support_hours` <a name="put_support_hours" id="@cdktf/provider-pagerduty.service.Service.putSupportHours"></a>

```python
def put_support_hours(
  days_of_week: typing.List[typing.Union[int, float]] = None,
  end_time: str = None,
  start_time: str = None,
  time_zone: str = None,
  type: str = None
) -> None
```

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.daysOfWeek"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#days_of_week Service#days_of_week}.

---

###### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.endTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#end_time Service#end_time}.

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#start_time Service#start_time}.

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#time_zone Service#time_zone}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

##### `reset_acknowledgement_timeout` <a name="reset_acknowledgement_timeout" id="@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout"></a>

```python
def reset_acknowledgement_timeout() -> None
```

##### `reset_alert_creation` <a name="reset_alert_creation" id="@cdktf/provider-pagerduty.service.Service.resetAlertCreation"></a>

```python
def reset_alert_creation() -> None
```

##### `reset_alert_grouping` <a name="reset_alert_grouping" id="@cdktf/provider-pagerduty.service.Service.resetAlertGrouping"></a>

```python
def reset_alert_grouping() -> None
```

##### `reset_alert_grouping_parameters` <a name="reset_alert_grouping_parameters" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters"></a>

```python
def reset_alert_grouping_parameters() -> None
```

##### `reset_alert_grouping_timeout` <a name="reset_alert_grouping_timeout" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout"></a>

```python
def reset_alert_grouping_timeout() -> None
```

##### `reset_auto_pause_notifications_parameters` <a name="reset_auto_pause_notifications_parameters" id="@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters"></a>

```python
def reset_auto_pause_notifications_parameters() -> None
```

##### `reset_auto_resolve_timeout` <a name="reset_auto_resolve_timeout" id="@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout"></a>

```python
def reset_auto_resolve_timeout() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-pagerduty.service.Service.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-pagerduty.service.Service.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incident_urgency_rule` <a name="reset_incident_urgency_rule" id="@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule"></a>

```python
def reset_incident_urgency_rule() -> None
```

##### `reset_response_play` <a name="reset_response_play" id="@cdktf/provider-pagerduty.service.Service.resetResponsePlay"></a>

```python
def reset_response_play() -> None
```

##### `reset_scheduled_actions` <a name="reset_scheduled_actions" id="@cdktf/provider-pagerduty.service.Service.resetScheduledActions"></a>

```python
def reset_scheduled_actions() -> None
```

##### `reset_support_hours` <a name="reset_support_hours" id="@cdktf/provider-pagerduty.service.Service.resetSupportHours"></a>

```python
def reset_support_hours() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-pagerduty.service.Service.isConstruct"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.Service.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.Service.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters">alert_grouping_parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters">auto_pause_notifications_parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule">incident_urgency_rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp">last_incident_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActions">scheduled_actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHours">support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput">acknowledgement_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreationInput">alert_creation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput">alert_grouping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput">alert_grouping_parameters_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput">alert_grouping_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput">auto_pause_notifications_parameters_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput">auto_resolve_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput">escalation_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput">incident_urgency_rule_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlayInput">response_play_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput">scheduled_actions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHoursInput">support_hours_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout">acknowledgement_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreation">alert_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGrouping">alert_grouping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout">alert_grouping_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout">auto_resolve_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicy">escalation_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlay">response_play</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.service.Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-pagerduty.service.Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-pagerduty.service.Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.Service.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.Service.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.service.Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.service.Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.Service.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `alert_grouping_parameters`<sup>Required</sup> <a name="alert_grouping_parameters" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters"></a>

```python
alert_grouping_parameters: ServiceAlertGroupingParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a>

---

##### `auto_pause_notifications_parameters`<sup>Required</sup> <a name="auto_pause_notifications_parameters" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters"></a>

```python
auto_pause_notifications_parameters: ServiceAutoPauseNotificationsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-pagerduty.service.Service.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-pagerduty.service.Service.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `incident_urgency_rule`<sup>Required</sup> <a name="incident_urgency_rule" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule"></a>

```python
incident_urgency_rule: ServiceIncidentUrgencyRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a>

---

##### `last_incident_timestamp`<sup>Required</sup> <a name="last_incident_timestamp" id="@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp"></a>

```python
last_incident_timestamp: str
```

- *Type:* str

---

##### `scheduled_actions`<sup>Required</sup> <a name="scheduled_actions" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActions"></a>

```python
scheduled_actions: ServiceScheduledActionsList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-pagerduty.service.Service.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `support_hours`<sup>Required</sup> <a name="support_hours" id="@cdktf/provider-pagerduty.service.Service.property.supportHours"></a>

```python
support_hours: ServiceSupportHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.Service.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `acknowledgement_timeout_input`<sup>Optional</sup> <a name="acknowledgement_timeout_input" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput"></a>

```python
acknowledgement_timeout_input: str
```

- *Type:* str

---

##### `alert_creation_input`<sup>Optional</sup> <a name="alert_creation_input" id="@cdktf/provider-pagerduty.service.Service.property.alertCreationInput"></a>

```python
alert_creation_input: str
```

- *Type:* str

---

##### `alert_grouping_input`<sup>Optional</sup> <a name="alert_grouping_input" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput"></a>

```python
alert_grouping_input: str
```

- *Type:* str

---

##### `alert_grouping_parameters_input`<sup>Optional</sup> <a name="alert_grouping_parameters_input" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput"></a>

```python
alert_grouping_parameters_input: ServiceAlertGroupingParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `alert_grouping_timeout_input`<sup>Optional</sup> <a name="alert_grouping_timeout_input" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput"></a>

```python
alert_grouping_timeout_input: str
```

- *Type:* str

---

##### `auto_pause_notifications_parameters_input`<sup>Optional</sup> <a name="auto_pause_notifications_parameters_input" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput"></a>

```python
auto_pause_notifications_parameters_input: ServiceAutoPauseNotificationsParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `auto_resolve_timeout_input`<sup>Optional</sup> <a name="auto_resolve_timeout_input" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput"></a>

```python
auto_resolve_timeout_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-pagerduty.service.Service.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `escalation_policy_input`<sup>Optional</sup> <a name="escalation_policy_input" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput"></a>

```python
escalation_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-pagerduty.service.Service.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incident_urgency_rule_input`<sup>Optional</sup> <a name="incident_urgency_rule_input" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput"></a>

```python
incident_urgency_rule_input: ServiceIncidentUrgencyRule
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.service.Service.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `response_play_input`<sup>Optional</sup> <a name="response_play_input" id="@cdktf/provider-pagerduty.service.Service.property.responsePlayInput"></a>

```python
response_play_input: str
```

- *Type:* str

---

##### `scheduled_actions_input`<sup>Optional</sup> <a name="scheduled_actions_input" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput"></a>

```python
scheduled_actions_input: IResolvable | typing.List[ServiceScheduledActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]

---

##### `support_hours_input`<sup>Optional</sup> <a name="support_hours_input" id="@cdktf/provider-pagerduty.service.Service.property.supportHoursInput"></a>

```python
support_hours_input: ServiceSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `acknowledgement_timeout`<sup>Required</sup> <a name="acknowledgement_timeout" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout"></a>

```python
acknowledgement_timeout: str
```

- *Type:* str

---

##### `alert_creation`<sup>Required</sup> <a name="alert_creation" id="@cdktf/provider-pagerduty.service.Service.property.alertCreation"></a>

```python
alert_creation: str
```

- *Type:* str

---

##### `alert_grouping`<sup>Required</sup> <a name="alert_grouping" id="@cdktf/provider-pagerduty.service.Service.property.alertGrouping"></a>

```python
alert_grouping: str
```

- *Type:* str

---

##### `alert_grouping_timeout`<sup>Required</sup> <a name="alert_grouping_timeout" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout"></a>

```python
alert_grouping_timeout: str
```

- *Type:* str

---

##### `auto_resolve_timeout`<sup>Required</sup> <a name="auto_resolve_timeout" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout"></a>

```python
auto_resolve_timeout: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.service.Service.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `escalation_policy`<sup>Required</sup> <a name="escalation_policy" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicy"></a>

```python
escalation_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.Service.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `response_play`<sup>Required</sup> <a name="response_play" id="@cdktf/provider-pagerduty.service.Service.property.responsePlay"></a>

```python
response_play: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.service.Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAlertGroupingParameters <a name="ServiceAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceAlertGroupingParameters(
  config: ServiceAlertGroupingParametersConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config"></a>

```python
config: ServiceAlertGroupingParametersConfig
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#config Service#config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

### ServiceAlertGroupingParametersConfig <a name="ServiceAlertGroupingParametersConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceAlertGroupingParametersConfig(
  aggregate: str = None,
  fields: typing.List[str] = None,
  timeout: typing.Union[int, float] = None,
  time_window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate">aggregate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#aggregate Service#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#fields Service#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#timeout Service#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow">time_window</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#time_window Service#time_window}. |

---

##### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate"></a>

```python
aggregate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#aggregate Service#aggregate}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#fields Service#fields}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#timeout Service#timeout}.

---

##### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow"></a>

```python
time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#time_window Service#time_window}.

---

### ServiceAutoPauseNotificationsParameters <a name="ServiceAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceAutoPauseNotificationsParameters(
  enabled: bool | IResolvable = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#enabled Service#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#timeout Service#timeout}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#enabled Service#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#timeout Service#timeout}.

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-pagerduty.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  escalation_policy: str,
  name: str,
  acknowledgement_timeout: str = None,
  alert_creation: str = None,
  alert_grouping: str = None,
  alert_grouping_parameters: ServiceAlertGroupingParameters = None,
  alert_grouping_timeout: str = None,
  auto_pause_notifications_parameters: ServiceAutoPauseNotificationsParameters = None,
  auto_resolve_timeout: str = None,
  description: str = None,
  id: str = None,
  incident_urgency_rule: ServiceIncidentUrgencyRule = None,
  response_play: str = None,
  scheduled_actions: IResolvable | typing.List[ServiceScheduledActions] = None,
  support_hours: ServiceSupportHours = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy">escalation_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout">acknowledgement_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation">alert_creation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping">alert_grouping</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters">alert_grouping_parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout">alert_grouping_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters">auto_pause_notifications_parameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout">auto_resolve_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule">incident_urgency_rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay">response_play</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions">scheduled_actions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]</code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours">support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `escalation_policy`<sup>Required</sup> <a name="escalation_policy" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy"></a>

```python
escalation_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#name Service#name}.

---

##### `acknowledgement_timeout`<sup>Optional</sup> <a name="acknowledgement_timeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout"></a>

```python
acknowledgement_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `alert_creation`<sup>Optional</sup> <a name="alert_creation" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation"></a>

```python
alert_creation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `alert_grouping`<sup>Optional</sup> <a name="alert_grouping" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping"></a>

```python
alert_grouping: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `alert_grouping_parameters`<sup>Optional</sup> <a name="alert_grouping_parameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters"></a>

```python
alert_grouping_parameters: ServiceAlertGroupingParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `alert_grouping_timeout`<sup>Optional</sup> <a name="alert_grouping_timeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout"></a>

```python
alert_grouping_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `auto_pause_notifications_parameters`<sup>Optional</sup> <a name="auto_pause_notifications_parameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters"></a>

```python
auto_pause_notifications_parameters: ServiceAutoPauseNotificationsParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `auto_resolve_timeout`<sup>Optional</sup> <a name="auto_resolve_timeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout"></a>

```python
auto_resolve_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#description Service#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident_urgency_rule`<sup>Optional</sup> <a name="incident_urgency_rule" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule"></a>

```python
incident_urgency_rule: ServiceIncidentUrgencyRule
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `response_play`<sup>Optional</sup> <a name="response_play" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay"></a>

```python
response_play: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#response_play Service#response_play}.

---

##### `scheduled_actions`<sup>Optional</sup> <a name="scheduled_actions" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions"></a>

```python
scheduled_actions: IResolvable | typing.List[ServiceScheduledActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `support_hours`<sup>Optional</sup> <a name="support_hours" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours"></a>

```python
support_hours: ServiceSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#support_hours Service#support_hours}

---

### ServiceIncidentUrgencyRule <a name="ServiceIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceIncidentUrgencyRule(
  type: str,
  during_support_hours: ServiceIncidentUrgencyRuleDuringSupportHours = None,
  outside_support_hours: ServiceIncidentUrgencyRuleOutsideSupportHours = None,
  urgency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours">during_support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | during_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours">outside_support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | outside_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency">urgency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

##### `during_support_hours`<sup>Optional</sup> <a name="during_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours"></a>

```python
during_support_hours: ServiceIncidentUrgencyRuleDuringSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

during_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#during_support_hours Service#during_support_hours}

---

##### `outside_support_hours`<sup>Optional</sup> <a name="outside_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours"></a>

```python
outside_support_hours: ServiceIncidentUrgencyRuleOutsideSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

outside_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#outside_support_hours Service#outside_support_hours}

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleDuringSupportHours <a name="ServiceIncidentUrgencyRuleDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceIncidentUrgencyRuleDuringSupportHours(
  type: str = None,
  urgency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency">urgency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleOutsideSupportHours <a name="ServiceIncidentUrgencyRuleOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceIncidentUrgencyRuleOutsideSupportHours(
  type: str = None,
  urgency: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency">urgency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}.

---

### ServiceScheduledActions <a name="ServiceScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceScheduledActions(
  at: IResolvable | typing.List[ServiceScheduledActionsAt] = None,
  to_urgency: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at">at</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]</code> | at block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency">to_urgency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#to_urgency Service#to_urgency}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |

---

##### `at`<sup>Optional</sup> <a name="at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at"></a>

```python
at: IResolvable | typing.List[ServiceScheduledActionsAt]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#at Service#at}

---

##### `to_urgency`<sup>Optional</sup> <a name="to_urgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency"></a>

```python
to_urgency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#to_urgency Service#to_urgency}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

### ServiceScheduledActionsAt <a name="ServiceScheduledActionsAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceScheduledActionsAt(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#name Service#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

### ServiceSupportHours <a name="ServiceSupportHours" id="@cdktf/provider-pagerduty.service.ServiceSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceSupportHours(
  days_of_week: typing.List[typing.Union[int, float]] = None,
  end_time: str = None,
  start_time: str = None,
  time_zone: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#days_of_week Service#days_of_week}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime">end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#end_time Service#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#start_time Service#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#time_zone Service#time_zone}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}. |

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek"></a>

```python
days_of_week: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#days_of_week Service#days_of_week}.

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#end_time Service#end_time}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#start_time Service#start_time}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#time_zone Service#time_zone}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAlertGroupingParametersConfigOutputReference <a name="ServiceAlertGroupingParametersConfigOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceAlertGroupingParametersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate">reset_aggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow">reset_time_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregate` <a name="reset_aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate"></a>

```python
def reset_aggregate() -> None
```

##### `reset_fields` <a name="reset_fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_time_window` <a name="reset_time_window" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow"></a>

```python
def reset_time_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput">aggregate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput">time_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate">aggregate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow">time_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregate_input`<sup>Optional</sup> <a name="aggregate_input" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput"></a>

```python
aggregate_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window_input`<sup>Optional</sup> <a name="time_window_input" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput"></a>

```python
time_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate"></a>

```python
aggregate: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow"></a>

```python
time_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceAlertGroupingParametersConfig
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---


### ServiceAlertGroupingParametersOutputReference <a name="ServiceAlertGroupingParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceAlertGroupingParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig"></a>

```python
def put_config(
  aggregate: str = None,
  fields: typing.List[str] = None,
  timeout: typing.Union[int, float] = None,
  time_window: typing.Union[int, float] = None
) -> None
```

###### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.aggregate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#aggregate Service#aggregate}.

---

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#fields Service#fields}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#timeout Service#timeout}.

---

###### `time_window`<sup>Optional</sup> <a name="time_window" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.timeWindow"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#time_window Service#time_window}.

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config"></a>

```python
config: ServiceAlertGroupingParametersConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput"></a>

```python
config_input: ServiceAlertGroupingParametersConfig
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue"></a>

```python
internal_value: ServiceAlertGroupingParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---


### ServiceAutoPauseNotificationsParametersOutputReference <a name="ServiceAutoPauseNotificationsParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceAutoPauseNotificationsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue"></a>

```python
internal_value: ServiceAutoPauseNotificationsParameters
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---


### ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency">reset_urgency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_urgency` <a name="reset_urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency"></a>

```python
def reset_urgency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput">urgency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency">urgency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `urgency_input`<sup>Optional</sup> <a name="urgency_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput"></a>

```python
urgency_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue"></a>

```python
internal_value: ServiceIncidentUrgencyRuleDuringSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---


### ServiceIncidentUrgencyRuleOutputReference <a name="ServiceIncidentUrgencyRuleOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceIncidentUrgencyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours">put_during_support_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours">put_outside_support_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours">reset_during_support_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours">reset_outside_support_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency">reset_urgency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_during_support_hours` <a name="put_during_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours"></a>

```python
def put_during_support_hours(
  type: str = None,
  urgency: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

###### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours.parameter.urgency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}.

---

##### `put_outside_support_hours` <a name="put_outside_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours"></a>

```python
def put_outside_support_hours(
  type: str = None,
  urgency: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#type Service#type}.

---

###### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours.parameter.urgency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.3/docs/resources/service#urgency Service#urgency}.

---

##### `reset_during_support_hours` <a name="reset_during_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours"></a>

```python
def reset_during_support_hours() -> None
```

##### `reset_outside_support_hours` <a name="reset_outside_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours"></a>

```python
def reset_outside_support_hours() -> None
```

##### `reset_urgency` <a name="reset_urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency"></a>

```python
def reset_urgency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours">during_support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours">outside_support_hours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput">during_support_hours_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput">outside_support_hours_input</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput">urgency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency">urgency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `during_support_hours`<sup>Required</sup> <a name="during_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours"></a>

```python
during_support_hours: ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a>

---

##### `outside_support_hours`<sup>Required</sup> <a name="outside_support_hours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours"></a>

```python
outside_support_hours: ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a>

---

##### `during_support_hours_input`<sup>Optional</sup> <a name="during_support_hours_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput"></a>

```python
during_support_hours_input: ServiceIncidentUrgencyRuleDuringSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `outside_support_hours_input`<sup>Optional</sup> <a name="outside_support_hours_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput"></a>

```python
outside_support_hours_input: ServiceIncidentUrgencyRuleOutsideSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `urgency_input`<sup>Optional</sup> <a name="urgency_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput"></a>

```python
urgency_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue"></a>

```python
internal_value: ServiceIncidentUrgencyRule
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---


### ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency">reset_urgency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_urgency` <a name="reset_urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency"></a>

```python
def reset_urgency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput">urgency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency">urgency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `urgency_input`<sup>Optional</sup> <a name="urgency_input" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput"></a>

```python
urgency_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency"></a>

```python
urgency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue"></a>

```python
internal_value: ServiceIncidentUrgencyRuleOutsideSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---


### ServiceScheduledActionsAtList <a name="ServiceScheduledActionsAtList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceScheduledActionsAtList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceScheduledActionsAtOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServiceScheduledActionsAt]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]

---


### ServiceScheduledActionsAtOutputReference <a name="ServiceScheduledActionsAtOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceScheduledActionsAtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServiceScheduledActionsAt
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>

---


### ServiceScheduledActionsList <a name="ServiceScheduledActionsList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceScheduledActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceScheduledActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ServiceScheduledActions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>]

---


### ServiceScheduledActionsOutputReference <a name="ServiceScheduledActionsOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceScheduledActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt">put_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt">reset_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency">reset_to_urgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_at` <a name="put_at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt"></a>

```python
def put_at(
  value: IResolvable | typing.List[ServiceScheduledActionsAt]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]

---

##### `reset_at` <a name="reset_at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt"></a>

```python
def reset_at() -> None
```

##### `reset_to_urgency` <a name="reset_to_urgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency"></a>

```python
def reset_to_urgency() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at">at</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput">at_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput">to_urgency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency">to_urgency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at`<sup>Required</sup> <a name="at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at"></a>

```python
at: ServiceScheduledActionsAtList
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a>

---

##### `at_input`<sup>Optional</sup> <a name="at_input" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput"></a>

```python
at_input: IResolvable | typing.List[ServiceScheduledActionsAt]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>]

---

##### `to_urgency_input`<sup>Optional</sup> <a name="to_urgency_input" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput"></a>

```python
to_urgency_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `to_urgency`<sup>Required</sup> <a name="to_urgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency"></a>

```python
to_urgency: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServiceScheduledActions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>

---


### ServiceSupportHoursOutputReference <a name="ServiceSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_pagerduty import service

service.ServiceSupportHoursOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue"></a>

```python
internal_value: ServiceSupportHours
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---



