# `incidentWorkflow` Submodule <a name="`incidentWorkflow` Submodule" id="@cdktf/provider-pagerduty.incidentWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentWorkflow <a name="IncidentWorkflow" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow pagerduty_incident_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflow;

IncidentWorkflow.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isEnabled(java.lang.String)
//  .step(IResolvable)
//  .step(java.util.List<IncidentWorkflowStep>)
//  .team(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#description IncidentWorkflow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#id IncidentWorkflow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#is_enabled IncidentWorkflow#is_enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>></code> | step block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.team">team</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#team IncidentWorkflow#team}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#description IncidentWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#id IncidentWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#is_enabled IncidentWorkflow#is_enabled}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.step"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>>

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.Initializer.parameter.team"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#team IncidentWorkflow#team}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep">resetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam">resetTeam</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStep` <a name="putStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep"></a>

```java
public void putStep(IResolvable OR java.util.List<IncidentWorkflowStep> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.putStep.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetId"></a>

```java
public void resetId()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetStep` <a name="resetStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetStep"></a>

```java
public void resetStep()
```

##### `resetTeam` <a name="resetTeam" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.resetTeam"></a>

```java
public void resetTeam()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflow;

IncidentWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflow;

IncidentWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflow;

IncidentWorkflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflow;

IncidentWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IncidentWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IncidentWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IncidentWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IncidentWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IncidentWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step">step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput">stepInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput">teamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabled">isEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team">team</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.step"></a>

```java
public IncidentWorkflowStepList getStep();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList">IncidentWorkflowStepList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabledInput"></a>

```java
public java.lang.String getIsEnabledInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.stepInput"></a>

```java
public java.lang.Object getStepInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>>

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.teamInput"></a>

```java
public java.lang.String getTeamInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.isEnabled"></a>

```java
public java.lang.String getIsEnabled();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentWorkflowConfig <a name="IncidentWorkflowConfig" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowConfig;

IncidentWorkflowConfig.builder()
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
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isEnabled(java.lang.String)
//  .step(IResolvable)
//  .step(java.util.List<IncidentWorkflowStep>)
//  .team(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#description IncidentWorkflow#description}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#id IncidentWorkflow#id}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#is_enabled IncidentWorkflow#is_enabled}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>></code> | step block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team">team</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#team IncidentWorkflow#team}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#description IncidentWorkflow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#id IncidentWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.isEnabled"></a>

```java
public java.lang.String getIsEnabled();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#is_enabled IncidentWorkflow#is_enabled}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.step"></a>

```java
public java.lang.Object getStep();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>>

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowConfig.property.team"></a>

```java
public java.lang.String getTeam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#team IncidentWorkflow#team}.

---

### IncidentWorkflowStep <a name="IncidentWorkflowStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStep;

IncidentWorkflowStep.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .inlineStepsInput(IResolvable)
//  .inlineStepsInput(java.util.List<IncidentWorkflowStepInlineStepsInput>)
//  .input(IResolvable)
//  .input(java.util.List<IncidentWorkflowStepInput>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput">inlineStepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>></code> | inline_steps_input block. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>></code> | input block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `inlineStepsInput`<sup>Optional</sup> <a name="inlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.inlineStepsInput"></a>

```java
public java.lang.Object getInlineStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>>

inline_steps_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#inline_steps_input IncidentWorkflow#inline_steps_input}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInput <a name="IncidentWorkflowStepInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInput;

IncidentWorkflowStepInlineStepsInput.builder()
    .name(java.lang.String)
//  .step(IResolvable)
//  .step(java.util.List<IncidentWorkflowStepInlineStepsInputStep>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>></code> | step block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput.property.step"></a>

```java
public java.lang.Object getStep();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>>

step block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#step IncidentWorkflow#step}

---

### IncidentWorkflowStepInlineStepsInputStep <a name="IncidentWorkflowStepInlineStepsInputStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputStep;

IncidentWorkflowStepInlineStepsInputStep.builder()
    .action(java.lang.String)
    .name(java.lang.String)
//  .input(IResolvable)
//  .input(java.util.List<IncidentWorkflowStepInlineStepsInputStepInput>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#action IncidentWorkflow#action}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input">input</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>></code> | input block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#action IncidentWorkflow#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep.property.input"></a>

```java
public java.lang.Object getInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#input IncidentWorkflow#input}

---

### IncidentWorkflowStepInlineStepsInputStepInput <a name="IncidentWorkflowStepInlineStepsInputStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputStepInput;

IncidentWorkflowStepInlineStepsInputStepInput.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

### IncidentWorkflowStepInput <a name="IncidentWorkflowStepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInput;

IncidentWorkflowStepInput.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#value IncidentWorkflow#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#name IncidentWorkflow#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.22.0/docs/resources/incident_workflow#value IncidentWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentWorkflowStepInlineStepsInputList <a name="IncidentWorkflowStepInlineStepsInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputList;

new IncidentWorkflowStepInlineStepsInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get"></a>

```java
public IncidentWorkflowStepInlineStepsInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>>

---


### IncidentWorkflowStepInlineStepsInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputOutputReference;

new IncidentWorkflowStepInlineStepsInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep">resetStep</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStep` <a name="putStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep"></a>

```java
public void putStep(IResolvable OR java.util.List<IncidentWorkflowStepInlineStepsInputStep> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.putStep.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>>

---

##### `resetStep` <a name="resetStep" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.resetStep"></a>

```java
public void resetStep()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step">step</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput">stepInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.step"></a>

```java
public IncidentWorkflowStepInlineStepsInputStepList getStep();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList">IncidentWorkflowStepInlineStepsInputStepList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.stepInput"></a>

```java
public java.lang.Object getStepInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>

---


### IncidentWorkflowStepInlineStepsInputStepInputList <a name="IncidentWorkflowStepInlineStepsInputStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputStepInputList;

new IncidentWorkflowStepInlineStepsInputStepInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get"></a>

```java
public IncidentWorkflowStepInlineStepsInputStepInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>>

---


### IncidentWorkflowStepInlineStepsInputStepInputOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference;

new IncidentWorkflowStepInlineStepsInputStepInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated">generated</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.generated"></a>

```java
public IResolvable getGenerated();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>

---


### IncidentWorkflowStepInlineStepsInputStepList <a name="IncidentWorkflowStepInlineStepsInputStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputStepList;

new IncidentWorkflowStepInlineStepsInputStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get"></a>

```java
public IncidentWorkflowStepInlineStepsInputStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>>

---


### IncidentWorkflowStepInlineStepsInputStepOutputReference <a name="IncidentWorkflowStepInlineStepsInputStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInlineStepsInputStepOutputReference;

new IncidentWorkflowStepInlineStepsInputStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput">resetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<IncidentWorkflowStepInlineStepsInputStepInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>>

---

##### `resetInput` <a name="resetInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.resetInput"></a>

```java
public void resetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.input"></a>

```java
public IncidentWorkflowStepInlineStepsInputStepInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInputList">IncidentWorkflowStepInlineStepsInputStepInputList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepInput">IncidentWorkflowStepInlineStepsInputStepInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStepOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputStep">IncidentWorkflowStepInlineStepsInputStep</a>

---


### IncidentWorkflowStepInputList <a name="IncidentWorkflowStepInputList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInputList;

new IncidentWorkflowStepInputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get"></a>

```java
public IncidentWorkflowStepInputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>>

---


### IncidentWorkflowStepInputOutputReference <a name="IncidentWorkflowStepInputOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepInputOutputReference;

new IncidentWorkflowStepInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated">generated</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generated`<sup>Required</sup> <a name="generated" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.generated"></a>

```java
public IResolvable getGenerated();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>

---


### IncidentWorkflowStepList <a name="IncidentWorkflowStepList" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepList;

new IncidentWorkflowStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get"></a>

```java
public IncidentWorkflowStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>>

---


### IncidentWorkflowStepOutputReference <a name="IncidentWorkflowStepOutputReference" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.incident_workflow.IncidentWorkflowStepOutputReference;

new IncidentWorkflowStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput">putInlineStepsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput">resetInlineStepsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput">resetInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInlineStepsInput` <a name="putInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput"></a>

```java
public void putInlineStepsInput(IResolvable OR java.util.List<IncidentWorkflowStepInlineStepsInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInlineStepsInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>>

---

##### `putInput` <a name="putInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput"></a>

```java
public void putInput(IResolvable OR java.util.List<IncidentWorkflowStepInput> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.putInput.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>>

---

##### `resetInlineStepsInput` <a name="resetInlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInlineStepsInput"></a>

```java
public void resetInlineStepsInput()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.resetInput"></a>

```java
public void resetInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput">inlineStepsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput">inlineStepsInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput">inputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inlineStepsInput`<sup>Required</sup> <a name="inlineStepsInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInput"></a>

```java
public IncidentWorkflowStepInlineStepsInputList getInlineStepsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInputList">IncidentWorkflowStepInlineStepsInputList</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.input"></a>

```java
public IncidentWorkflowStepInputList getInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInputList">IncidentWorkflowStepInputList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `inlineStepsInputInput`<sup>Optional</sup> <a name="inlineStepsInputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inlineStepsInputInput"></a>

```java
public java.lang.Object getInlineStepsInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInlineStepsInput">IncidentWorkflowStepInlineStepsInput</a>>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.inputInput"></a>

```java
public java.lang.Object getInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepInput">IncidentWorkflowStepInput</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStepOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.incidentWorkflow.IncidentWorkflowStep">IncidentWorkflowStep</a>

---



