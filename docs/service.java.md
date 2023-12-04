# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-pagerduty.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-pagerduty.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service pagerduty_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.Service.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.Service;

Service.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .escalationPolicy(java.lang.String)
    .name(java.lang.String)
//  .acknowledgementTimeout(java.lang.String)
//  .alertCreation(java.lang.String)
//  .alertGrouping(java.lang.String)
//  .alertGroupingParameters(ServiceAlertGroupingParameters)
//  .alertGroupingTimeout(java.lang.String)
//  .autoPauseNotificationsParameters(ServiceAutoPauseNotificationsParameters)
//  .autoResolveTimeout(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .incidentUrgencyRule(ServiceIncidentUrgencyRule)
//  .responsePlay(java.lang.String)
//  .scheduledActions(IResolvable)
//  .scheduledActions(java.util.List<ServiceScheduledActions>)
//  .supportHours(ServiceSupportHours)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.acknowledgementTimeout">acknowledgementTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertCreation">alertCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGrouping">alertGrouping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingParameters">alertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingTimeout">alertGroupingTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoPauseNotificationsParameters">autoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoResolveTimeout">autoResolveTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.incidentUrgencyRule">incidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.responsePlay">responsePlay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scheduledActions">scheduledActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>></code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.Initializer.parameter.supportHours">supportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.escalationPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#name Service#name}.

---

##### `acknowledgementTimeout`<sup>Optional</sup> <a name="acknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.acknowledgementTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `alertCreation`<sup>Optional</sup> <a name="alertCreation" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertCreation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `alertGrouping`<sup>Optional</sup> <a name="alertGrouping" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGrouping"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `alertGroupingParameters`<sup>Optional</sup> <a name="alertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingParameters"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `alertGroupingTimeout`<sup>Optional</sup> <a name="alertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.alertGroupingTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `autoPauseNotificationsParameters`<sup>Optional</sup> <a name="autoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoPauseNotificationsParameters"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `autoResolveTimeout`<sup>Optional</sup> <a name="autoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.autoResolveTimeout"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#description Service#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incidentUrgencyRule`<sup>Optional</sup> <a name="incidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.incidentUrgencyRule"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `responsePlay`<sup>Optional</sup> <a name="responsePlay" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.responsePlay"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#response_play Service#response_play}.

---

##### `scheduledActions`<sup>Optional</sup> <a name="scheduledActions" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.scheduledActions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>>

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `supportHours`<sup>Optional</sup> <a name="supportHours" id="@cdktf/provider-pagerduty.service.Service.Initializer.parameter.supportHours"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#support_hours Service#support_hours}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters">putAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters">putAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule">putIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putScheduledActions">putScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.putSupportHours">putSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout">resetAcknowledgementTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertCreation">resetAlertCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGrouping">resetAlertGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters">resetAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout">resetAlertGroupingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters">resetAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout">resetAutoResolveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule">resetIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetResponsePlay">resetResponsePlay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetScheduledActions">resetScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.resetSupportHours">resetSupportHours</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.Service.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.service.Service.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.service.Service.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.service.Service.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.service.Service.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.service.Service.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.service.Service.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.service.Service.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.service.Service.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.service.Service.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.service.Service.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlertGroupingParameters` <a name="putAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters"></a>

```java
public void putAlertGroupingParameters(ServiceAlertGroupingParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putAlertGroupingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `putAutoPauseNotificationsParameters` <a name="putAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters"></a>

```java
public void putAutoPauseNotificationsParameters(ServiceAutoPauseNotificationsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putAutoPauseNotificationsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `putIncidentUrgencyRule` <a name="putIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule"></a>

```java
public void putIncidentUrgencyRule(ServiceIncidentUrgencyRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putIncidentUrgencyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `putScheduledActions` <a name="putScheduledActions" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions"></a>

```java
public void putScheduledActions(IResolvable OR java.util.List<ServiceScheduledActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putScheduledActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>>

---

##### `putSupportHours` <a name="putSupportHours" id="@cdktf/provider-pagerduty.service.Service.putSupportHours"></a>

```java
public void putSupportHours(ServiceSupportHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.Service.putSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `resetAcknowledgementTimeout` <a name="resetAcknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAcknowledgementTimeout"></a>

```java
public void resetAcknowledgementTimeout()
```

##### `resetAlertCreation` <a name="resetAlertCreation" id="@cdktf/provider-pagerduty.service.Service.resetAlertCreation"></a>

```java
public void resetAlertCreation()
```

##### `resetAlertGrouping` <a name="resetAlertGrouping" id="@cdktf/provider-pagerduty.service.Service.resetAlertGrouping"></a>

```java
public void resetAlertGrouping()
```

##### `resetAlertGroupingParameters` <a name="resetAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingParameters"></a>

```java
public void resetAlertGroupingParameters()
```

##### `resetAlertGroupingTimeout` <a name="resetAlertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAlertGroupingTimeout"></a>

```java
public void resetAlertGroupingTimeout()
```

##### `resetAutoPauseNotificationsParameters` <a name="resetAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.resetAutoPauseNotificationsParameters"></a>

```java
public void resetAutoPauseNotificationsParameters()
```

##### `resetAutoResolveTimeout` <a name="resetAutoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.resetAutoResolveTimeout"></a>

```java
public void resetAutoResolveTimeout()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.service.Service.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.service.Service.resetId"></a>

```java
public void resetId()
```

##### `resetIncidentUrgencyRule` <a name="resetIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.resetIncidentUrgencyRule"></a>

```java
public void resetIncidentUrgencyRule()
```

##### `resetResponsePlay` <a name="resetResponsePlay" id="@cdktf/provider-pagerduty.service.Service.resetResponsePlay"></a>

```java
public void resetResponsePlay()
```

##### `resetScheduledActions` <a name="resetScheduledActions" id="@cdktf/provider-pagerduty.service.Service.resetScheduledActions"></a>

```java
public void resetScheduledActions()
```

##### `resetSupportHours` <a name="resetSupportHours" id="@cdktf/provider-pagerduty.service.Service.resetSupportHours"></a>

```java
public void resetSupportHours()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.service.Service.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.Service;

Service.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.Service;

Service.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.Service;

Service.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.Service;

Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters">alertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters">autoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.htmlUrl">htmlUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule">incidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp">lastIncidentTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActions">scheduledActions</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHours">supportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput">acknowledgementTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreationInput">alertCreationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput">alertGroupingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput">alertGroupingParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput">alertGroupingTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput">autoPauseNotificationsParametersInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput">autoResolveTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput">escalationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput">incidentUrgencyRuleInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlayInput">responsePlayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput">scheduledActionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.supportHoursInput">supportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout">acknowledgementTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertCreation">alertCreation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGrouping">alertGrouping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout">alertGroupingTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout">autoResolveTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.responsePlay">responsePlay</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.service.Service.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.service.Service.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.Service.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.service.Service.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.service.Service.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.service.Service.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.service.Service.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.Service.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.Service.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.service.Service.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.service.Service.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.Service.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.Service.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.Service.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alertGroupingParameters`<sup>Required</sup> <a name="alertGroupingParameters" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParameters"></a>

```java
public ServiceAlertGroupingParametersOutputReference getAlertGroupingParameters();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference">ServiceAlertGroupingParametersOutputReference</a>

---

##### `autoPauseNotificationsParameters`<sup>Required</sup> <a name="autoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParameters"></a>

```java
public ServiceAutoPauseNotificationsParametersOutputReference getAutoPauseNotificationsParameters();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference">ServiceAutoPauseNotificationsParametersOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-pagerduty.service.Service.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-pagerduty.service.Service.property.htmlUrl"></a>

```java
public java.lang.String getHtmlUrl();
```

- *Type:* java.lang.String

---

##### `incidentUrgencyRule`<sup>Required</sup> <a name="incidentUrgencyRule" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRule"></a>

```java
public ServiceIncidentUrgencyRuleOutputReference getIncidentUrgencyRule();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference">ServiceIncidentUrgencyRuleOutputReference</a>

---

##### `lastIncidentTimestamp`<sup>Required</sup> <a name="lastIncidentTimestamp" id="@cdktf/provider-pagerduty.service.Service.property.lastIncidentTimestamp"></a>

```java
public java.lang.String getLastIncidentTimestamp();
```

- *Type:* java.lang.String

---

##### `scheduledActions`<sup>Required</sup> <a name="scheduledActions" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActions"></a>

```java
public ServiceScheduledActionsList getScheduledActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList">ServiceScheduledActionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-pagerduty.service.Service.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `supportHours`<sup>Required</sup> <a name="supportHours" id="@cdktf/provider-pagerduty.service.Service.property.supportHours"></a>

```java
public ServiceSupportHoursOutputReference getSupportHours();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference">ServiceSupportHoursOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.Service.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `acknowledgementTimeoutInput`<sup>Optional</sup> <a name="acknowledgementTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeoutInput"></a>

```java
public java.lang.String getAcknowledgementTimeoutInput();
```

- *Type:* java.lang.String

---

##### `alertCreationInput`<sup>Optional</sup> <a name="alertCreationInput" id="@cdktf/provider-pagerduty.service.Service.property.alertCreationInput"></a>

```java
public java.lang.String getAlertCreationInput();
```

- *Type:* java.lang.String

---

##### `alertGroupingInput`<sup>Optional</sup> <a name="alertGroupingInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingInput"></a>

```java
public java.lang.String getAlertGroupingInput();
```

- *Type:* java.lang.String

---

##### `alertGroupingParametersInput`<sup>Optional</sup> <a name="alertGroupingParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingParametersInput"></a>

```java
public ServiceAlertGroupingParameters getAlertGroupingParametersInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---

##### `alertGroupingTimeoutInput`<sup>Optional</sup> <a name="alertGroupingTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeoutInput"></a>

```java
public java.lang.String getAlertGroupingTimeoutInput();
```

- *Type:* java.lang.String

---

##### `autoPauseNotificationsParametersInput`<sup>Optional</sup> <a name="autoPauseNotificationsParametersInput" id="@cdktf/provider-pagerduty.service.Service.property.autoPauseNotificationsParametersInput"></a>

```java
public ServiceAutoPauseNotificationsParameters getAutoPauseNotificationsParametersInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---

##### `autoResolveTimeoutInput`<sup>Optional</sup> <a name="autoResolveTimeoutInput" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeoutInput"></a>

```java
public java.lang.String getAutoResolveTimeoutInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.service.Service.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="escalationPolicyInput" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicyInput"></a>

```java
public java.lang.String getEscalationPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.service.Service.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incidentUrgencyRuleInput`<sup>Optional</sup> <a name="incidentUrgencyRuleInput" id="@cdktf/provider-pagerduty.service.Service.property.incidentUrgencyRuleInput"></a>

```java
public ServiceIncidentUrgencyRule getIncidentUrgencyRuleInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.service.Service.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `responsePlayInput`<sup>Optional</sup> <a name="responsePlayInput" id="@cdktf/provider-pagerduty.service.Service.property.responsePlayInput"></a>

```java
public java.lang.String getResponsePlayInput();
```

- *Type:* java.lang.String

---

##### `scheduledActionsInput`<sup>Optional</sup> <a name="scheduledActionsInput" id="@cdktf/provider-pagerduty.service.Service.property.scheduledActionsInput"></a>

```java
public java.lang.Object getScheduledActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>>

---

##### `supportHoursInput`<sup>Optional</sup> <a name="supportHoursInput" id="@cdktf/provider-pagerduty.service.Service.property.supportHoursInput"></a>

```java
public ServiceSupportHours getSupportHoursInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---

##### `acknowledgementTimeout`<sup>Required</sup> <a name="acknowledgementTimeout" id="@cdktf/provider-pagerduty.service.Service.property.acknowledgementTimeout"></a>

```java
public java.lang.String getAcknowledgementTimeout();
```

- *Type:* java.lang.String

---

##### `alertCreation`<sup>Required</sup> <a name="alertCreation" id="@cdktf/provider-pagerduty.service.Service.property.alertCreation"></a>

```java
public java.lang.String getAlertCreation();
```

- *Type:* java.lang.String

---

##### `alertGrouping`<sup>Required</sup> <a name="alertGrouping" id="@cdktf/provider-pagerduty.service.Service.property.alertGrouping"></a>

```java
public java.lang.String getAlertGrouping();
```

- *Type:* java.lang.String

---

##### `alertGroupingTimeout`<sup>Required</sup> <a name="alertGroupingTimeout" id="@cdktf/provider-pagerduty.service.Service.property.alertGroupingTimeout"></a>

```java
public java.lang.String getAlertGroupingTimeout();
```

- *Type:* java.lang.String

---

##### `autoResolveTimeout`<sup>Required</sup> <a name="autoResolveTimeout" id="@cdktf/provider-pagerduty.service.Service.property.autoResolveTimeout"></a>

```java
public java.lang.String getAutoResolveTimeout();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.service.Service.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.service.Service.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.service.Service.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.Service.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `responsePlay`<sup>Required</sup> <a name="responsePlay" id="@cdktf/provider-pagerduty.service.Service.property.responsePlay"></a>

```java
public java.lang.String getResponsePlay();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.service.Service.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAlertGroupingParameters <a name="ServiceAlertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceAlertGroupingParameters;

ServiceAlertGroupingParameters.builder()
//  .config(ServiceAlertGroupingParametersConfig)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.config"></a>

```java
public ServiceAlertGroupingParametersConfig getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#config Service#config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

### ServiceAlertGroupingParametersConfig <a name="ServiceAlertGroupingParametersConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceAlertGroupingParametersConfig;

ServiceAlertGroupingParametersConfig.builder()
//  .aggregate(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .timeout(java.lang.Number)
//  .timeWindow(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate">aggregate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#aggregate Service#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#fields Service#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#timeout Service#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#time_window Service#time_window}. |

---

##### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.aggregate"></a>

```java
public java.lang.String getAggregate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#aggregate Service#aggregate}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#fields Service#fields}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#timeout Service#timeout}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig.property.timeWindow"></a>

```java
public java.lang.Number getTimeWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#time_window Service#time_window}.

---

### ServiceAutoPauseNotificationsParameters <a name="ServiceAutoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceAutoPauseNotificationsParameters;

ServiceAutoPauseNotificationsParameters.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#enabled Service#enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#timeout Service#timeout}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#enabled Service#enabled}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#timeout Service#timeout}.

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-pagerduty.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceConfig;

ServiceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .escalationPolicy(java.lang.String)
    .name(java.lang.String)
//  .acknowledgementTimeout(java.lang.String)
//  .alertCreation(java.lang.String)
//  .alertGrouping(java.lang.String)
//  .alertGroupingParameters(ServiceAlertGroupingParameters)
//  .alertGroupingTimeout(java.lang.String)
//  .autoPauseNotificationsParameters(ServiceAutoPauseNotificationsParameters)
//  .autoResolveTimeout(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .incidentUrgencyRule(ServiceIncidentUrgencyRule)
//  .responsePlay(java.lang.String)
//  .scheduledActions(IResolvable)
//  .scheduledActions(java.util.List<ServiceScheduledActions>)
//  .supportHours(ServiceSupportHours)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#escalation_policy Service#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout">acknowledgementTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation">alertCreation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_creation Service#alert_creation}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping">alertGrouping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping Service#alert_grouping}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters">alertGroupingParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | alert_grouping_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout">alertGroupingTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters">autoPauseNotificationsParameters</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | auto_pause_notifications_parameters block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout">autoResolveTimeout</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#description Service#description}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule">incidentUrgencyRule</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | incident_urgency_rule block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay">responsePlay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#response_play Service#response_play}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions">scheduledActions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>></code> | scheduled_actions block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours">supportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | support_hours block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#escalation_policy Service#escalation_policy}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#name Service#name}.

---

##### `acknowledgementTimeout`<sup>Optional</sup> <a name="acknowledgementTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.acknowledgementTimeout"></a>

```java
public java.lang.String getAcknowledgementTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#acknowledgement_timeout Service#acknowledgement_timeout}.

---

##### `alertCreation`<sup>Optional</sup> <a name="alertCreation" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertCreation"></a>

```java
public java.lang.String getAlertCreation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_creation Service#alert_creation}.

---

##### `alertGrouping`<sup>Optional</sup> <a name="alertGrouping" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGrouping"></a>

```java
public java.lang.String getAlertGrouping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping Service#alert_grouping}.

---

##### `alertGroupingParameters`<sup>Optional</sup> <a name="alertGroupingParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingParameters"></a>

```java
public ServiceAlertGroupingParameters getAlertGroupingParameters();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

alert_grouping_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping_parameters Service#alert_grouping_parameters}

---

##### `alertGroupingTimeout`<sup>Optional</sup> <a name="alertGroupingTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.alertGroupingTimeout"></a>

```java
public java.lang.String getAlertGroupingTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#alert_grouping_timeout Service#alert_grouping_timeout}.

---

##### `autoPauseNotificationsParameters`<sup>Optional</sup> <a name="autoPauseNotificationsParameters" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoPauseNotificationsParameters"></a>

```java
public ServiceAutoPauseNotificationsParameters getAutoPauseNotificationsParameters();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

auto_pause_notifications_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#auto_pause_notifications_parameters Service#auto_pause_notifications_parameters}

---

##### `autoResolveTimeout`<sup>Optional</sup> <a name="autoResolveTimeout" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.autoResolveTimeout"></a>

```java
public java.lang.String getAutoResolveTimeout();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#auto_resolve_timeout Service#auto_resolve_timeout}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#description Service#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incidentUrgencyRule`<sup>Optional</sup> <a name="incidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.incidentUrgencyRule"></a>

```java
public ServiceIncidentUrgencyRule getIncidentUrgencyRule();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

incident_urgency_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#incident_urgency_rule Service#incident_urgency_rule}

---

##### `responsePlay`<sup>Optional</sup> <a name="responsePlay" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.responsePlay"></a>

```java
public java.lang.String getResponsePlay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#response_play Service#response_play}.

---

##### `scheduledActions`<sup>Optional</sup> <a name="scheduledActions" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.scheduledActions"></a>

```java
public java.lang.Object getScheduledActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>>

scheduled_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#scheduled_actions Service#scheduled_actions}

---

##### `supportHours`<sup>Optional</sup> <a name="supportHours" id="@cdktf/provider-pagerduty.service.ServiceConfig.property.supportHours"></a>

```java
public ServiceSupportHours getSupportHours();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#support_hours Service#support_hours}

---

### ServiceIncidentUrgencyRule <a name="ServiceIncidentUrgencyRule" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceIncidentUrgencyRule;

ServiceIncidentUrgencyRule.builder()
    .type(java.lang.String)
//  .duringSupportHours(ServiceIncidentUrgencyRuleDuringSupportHours)
//  .outsideSupportHours(ServiceIncidentUrgencyRuleOutsideSupportHours)
//  .urgency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours">duringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | during_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours">outsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | outside_support_hours block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency">urgency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

##### `duringSupportHours`<sup>Optional</sup> <a name="duringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.duringSupportHours"></a>

```java
public ServiceIncidentUrgencyRuleDuringSupportHours getDuringSupportHours();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

during_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#during_support_hours Service#during_support_hours}

---

##### `outsideSupportHours`<sup>Optional</sup> <a name="outsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.outsideSupportHours"></a>

```java
public ServiceIncidentUrgencyRuleOutsideSupportHours getOutsideSupportHours();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

outside_support_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#outside_support_hours Service#outside_support_hours}

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleDuringSupportHours <a name="ServiceIncidentUrgencyRuleDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours;

ServiceIncidentUrgencyRuleDuringSupportHours.builder()
//  .type(java.lang.String)
//  .urgency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency">urgency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#urgency Service#urgency}.

---

### ServiceIncidentUrgencyRuleOutsideSupportHours <a name="ServiceIncidentUrgencyRuleOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours;

ServiceIncidentUrgencyRuleOutsideSupportHours.builder()
//  .type(java.lang.String)
//  .urgency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency">urgency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#urgency Service#urgency}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

##### `urgency`<sup>Optional</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#urgency Service#urgency}.

---

### ServiceScheduledActions <a name="ServiceScheduledActions" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceScheduledActions;

ServiceScheduledActions.builder()
//  .at(IResolvable)
//  .at(java.util.List<ServiceScheduledActionsAt>)
//  .toUrgency(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at">at</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>></code> | at block. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency">toUrgency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#to_urgency Service#to_urgency}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |

---

##### `at`<sup>Optional</sup> <a name="at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.at"></a>

```java
public java.lang.Object getAt();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>>

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#at Service#at}

---

##### `toUrgency`<sup>Optional</sup> <a name="toUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.toUrgency"></a>

```java
public java.lang.String getToUrgency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#to_urgency Service#to_urgency}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

### ServiceScheduledActionsAt <a name="ServiceScheduledActionsAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceScheduledActionsAt;

ServiceScheduledActionsAt.builder()
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#name Service#name}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#name Service#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

### ServiceSupportHours <a name="ServiceSupportHours" id="@cdktf/provider-pagerduty.service.ServiceSupportHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceSupportHours;

ServiceSupportHours.builder()
//  .daysOfWeek(java.util.List<java.lang.Number>)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
//  .timeZone(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#days_of_week Service#days_of_week}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#end_time Service#end_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#start_time Service#start_time}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#time_zone Service#time_zone}. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.Number> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#days_of_week Service#days_of_week}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#end_time Service#end_time}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#start_time Service#start_time}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#time_zone Service#time_zone}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceSupportHours.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.2.1/docs/resources/service#type Service#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAlertGroupingParametersConfigOutputReference <a name="ServiceAlertGroupingParametersConfigOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference;

new ServiceAlertGroupingParametersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate">resetAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregate` <a name="resetAggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetAggregate"></a>

```java
public void resetAggregate()
```

##### `resetFields` <a name="resetFields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.resetTimeWindow"></a>

```java
public void resetTimeWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput">aggregateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate">aggregate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregateInput`<sup>Optional</sup> <a name="aggregateInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregateInput"></a>

```java
public java.lang.String getAggregateInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindowInput"></a>

```java
public java.lang.Number getTimeWindowInput();
```

- *Type:* java.lang.Number

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.aggregate"></a>

```java
public java.lang.String getAggregate();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.timeWindow"></a>

```java
public java.lang.Number getTimeWindow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference.property.internalValue"></a>

```java
public ServiceAlertGroupingParametersConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---


### ServiceAlertGroupingParametersOutputReference <a name="ServiceAlertGroupingParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceAlertGroupingParametersOutputReference;

new ServiceAlertGroupingParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig"></a>

```java
public void putConfig(ServiceAlertGroupingParametersConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.config"></a>

```java
public ServiceAlertGroupingParametersConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfigOutputReference">ServiceAlertGroupingParametersConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.configInput"></a>

```java
public ServiceAlertGroupingParametersConfig getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersConfig">ServiceAlertGroupingParametersConfig</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceAlertGroupingParametersOutputReference.property.internalValue"></a>

```java
public ServiceAlertGroupingParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAlertGroupingParameters">ServiceAlertGroupingParameters</a>

---


### ServiceAutoPauseNotificationsParametersOutputReference <a name="ServiceAutoPauseNotificationsParametersOutputReference" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference;

new ServiceAutoPauseNotificationsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParametersOutputReference.property.internalValue"></a>

```java
public ServiceAutoPauseNotificationsParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceAutoPauseNotificationsParameters">ServiceAutoPauseNotificationsParameters</a>

---


### ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference;

new ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.resetUrgency"></a>

```java
public void resetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency">urgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgencyInput"></a>

```java
public java.lang.String getUrgencyInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference.property.internalValue"></a>

```java
public ServiceIncidentUrgencyRuleDuringSupportHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---


### ServiceIncidentUrgencyRuleOutputReference <a name="ServiceIncidentUrgencyRuleOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceIncidentUrgencyRuleOutputReference;

new ServiceIncidentUrgencyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours">putDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours">putOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours">resetDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours">resetOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuringSupportHours` <a name="putDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours"></a>

```java
public void putDuringSupportHours(ServiceIncidentUrgencyRuleDuringSupportHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putDuringSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `putOutsideSupportHours` <a name="putOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours"></a>

```java
public void putOutsideSupportHours(ServiceIncidentUrgencyRuleOutsideSupportHours value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.putOutsideSupportHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `resetDuringSupportHours` <a name="resetDuringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetDuringSupportHours"></a>

```java
public void resetDuringSupportHours()
```

##### `resetOutsideSupportHours` <a name="resetOutsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetOutsideSupportHours"></a>

```java
public void resetOutsideSupportHours()
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.resetUrgency"></a>

```java
public void resetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours">duringSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours">outsideSupportHours</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput">duringSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput">outsideSupportHoursInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency">urgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duringSupportHours`<sup>Required</sup> <a name="duringSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHours"></a>

```java
public ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference getDuringSupportHours();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference">ServiceIncidentUrgencyRuleDuringSupportHoursOutputReference</a>

---

##### `outsideSupportHours`<sup>Required</sup> <a name="outsideSupportHours" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHours"></a>

```java
public ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference getOutsideSupportHours();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference">ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference</a>

---

##### `duringSupportHoursInput`<sup>Optional</sup> <a name="duringSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.duringSupportHoursInput"></a>

```java
public ServiceIncidentUrgencyRuleDuringSupportHours getDuringSupportHoursInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleDuringSupportHours">ServiceIncidentUrgencyRuleDuringSupportHours</a>

---

##### `outsideSupportHoursInput`<sup>Optional</sup> <a name="outsideSupportHoursInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.outsideSupportHoursInput"></a>

```java
public ServiceIncidentUrgencyRuleOutsideSupportHours getOutsideSupportHoursInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgencyInput"></a>

```java
public java.lang.String getUrgencyInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutputReference.property.internalValue"></a>

```java
public ServiceIncidentUrgencyRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRule">ServiceIncidentUrgencyRule</a>

---


### ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference <a name="ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference;

new ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency">resetUrgency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUrgency` <a name="resetUrgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.resetUrgency"></a>

```java
public void resetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput">urgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency">urgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `urgencyInput`<sup>Optional</sup> <a name="urgencyInput" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgencyInput"></a>

```java
public java.lang.String getUrgencyInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `urgency`<sup>Required</sup> <a name="urgency" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.urgency"></a>

```java
public java.lang.String getUrgency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHoursOutputReference.property.internalValue"></a>

```java
public ServiceIncidentUrgencyRuleOutsideSupportHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceIncidentUrgencyRuleOutsideSupportHours">ServiceIncidentUrgencyRuleOutsideSupportHours</a>

---


### ServiceScheduledActionsAtList <a name="ServiceScheduledActionsAtList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceScheduledActionsAtList;

new ServiceScheduledActionsAtList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get"></a>

```java
public ServiceScheduledActionsAtOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>>

---


### ServiceScheduledActionsAtOutputReference <a name="ServiceScheduledActionsAtOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceScheduledActionsAtOutputReference;

new ServiceScheduledActionsAtOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>

---


### ServiceScheduledActionsList <a name="ServiceScheduledActionsList" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceScheduledActionsList;

new ServiceScheduledActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get"></a>

```java
public ServiceScheduledActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>>

---


### ServiceScheduledActionsOutputReference <a name="ServiceScheduledActionsOutputReference" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceScheduledActionsOutputReference;

new ServiceScheduledActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt">putAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt">resetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency">resetToUrgency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAt` <a name="putAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt"></a>

```java
public void putAt(IResolvable OR java.util.List<ServiceScheduledActionsAt> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.putAt.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>>

---

##### `resetAt` <a name="resetAt" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetAt"></a>

```java
public void resetAt()
```

##### `resetToUrgency` <a name="resetToUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetToUrgency"></a>

```java
public void resetToUrgency()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at">at</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput">atInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput">toUrgencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency">toUrgency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `at`<sup>Required</sup> <a name="at" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.at"></a>

```java
public ServiceScheduledActionsAtList getAt();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAtList">ServiceScheduledActionsAtList</a>

---

##### `atInput`<sup>Optional</sup> <a name="atInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.atInput"></a>

```java
public java.lang.Object getAtInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActionsAt">ServiceScheduledActionsAt</a>>

---

##### `toUrgencyInput`<sup>Optional</sup> <a name="toUrgencyInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgencyInput"></a>

```java
public java.lang.String getToUrgencyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `toUrgency`<sup>Required</sup> <a name="toUrgency" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.toUrgency"></a>

```java
public java.lang.String getToUrgency();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceScheduledActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.service.ServiceScheduledActions">ServiceScheduledActions</a>

---


### ServiceSupportHoursOutputReference <a name="ServiceSupportHoursOutputReference" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.service.ServiceSupportHoursOutputReference;

new ServiceSupportHoursOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.Number> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.service.ServiceSupportHoursOutputReference.property.internalValue"></a>

```java
public ServiceSupportHours getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.service.ServiceSupportHours">ServiceSupportHours</a>

---



