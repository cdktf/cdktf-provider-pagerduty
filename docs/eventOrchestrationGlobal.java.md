# `eventOrchestrationGlobal` Submodule <a name="`eventOrchestrationGlobal` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationGlobal <a name="EventOrchestrationGlobal" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global pagerduty_event_orchestration_global}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobal;

EventOrchestrationGlobal.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catchAll(EventOrchestrationGlobalCatchAll)
    .eventOrchestration(java.lang.String)
    .set(IResolvable|java.util.List<EventOrchestrationGlobalSet>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.eventOrchestration">eventOrchestration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.set">set</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>></code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.catchAll"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#catch_all EventOrchestrationGlobal#catch_all}

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.eventOrchestration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}.

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.set"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#set EventOrchestrationGlobal#set}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll">putCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatchAll` <a name="putCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll"></a>

```java
public void putCatchAll(EventOrchestrationGlobalCatchAll value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putCatchAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet"></a>

```java
public void putSet(IResolvable|java.util.List<EventOrchestrationGlobalSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.putSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventOrchestrationGlobal resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobal;

EventOrchestrationGlobal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobal;

EventOrchestrationGlobal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobal;

EventOrchestrationGlobal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobal;

EventOrchestrationGlobal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventOrchestrationGlobal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EventOrchestrationGlobal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventOrchestrationGlobal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventOrchestrationGlobal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EventOrchestrationGlobal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference">EventOrchestrationGlobalCatchAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.set">set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList">EventOrchestrationGlobalSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAllInput">catchAllInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestrationInput">eventOrchestrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.setInput">setInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestration">eventOrchestration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAll"></a>

```java
public EventOrchestrationGlobalCatchAllOutputReference getCatchAll();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference">EventOrchestrationGlobalCatchAllOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.set"></a>

```java
public EventOrchestrationGlobalSetList getSet();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList">EventOrchestrationGlobalSetList</a>

---

##### `catchAllInput`<sup>Optional</sup> <a name="catchAllInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.catchAllInput"></a>

```java
public EventOrchestrationGlobalCatchAll getCatchAllInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---

##### `eventOrchestrationInput`<sup>Optional</sup> <a name="eventOrchestrationInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestrationInput"></a>

```java
public java.lang.String getEventOrchestrationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.setInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSet> getSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>>

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.eventOrchestration"></a>

```java
public java.lang.String getEventOrchestration();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationGlobalCatchAll <a name="EventOrchestrationGlobalCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAll;

EventOrchestrationGlobalCatchAll.builder()
    .actions(EventOrchestrationGlobalCatchAllActions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | actions block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll.property.actions"></a>

```java
public EventOrchestrationGlobalCatchAllActions getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}

---

### EventOrchestrationGlobalCatchAllActions <a name="EventOrchestrationGlobalCatchAllActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActions;

EventOrchestrationGlobalCatchAllActions.builder()
//  .annotate(java.lang.String)
//  .automationAction(EventOrchestrationGlobalCatchAllActionsAutomationAction)
//  .dropEvent(java.lang.Boolean|IResolvable)
//  .escalationPolicy(java.lang.String)
//  .eventAction(java.lang.String)
//  .extraction(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsExtraction>)
//  .incidentCustomFieldUpdate(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate>)
//  .priority(java.lang.String)
//  .routeTo(java.lang.String)
//  .severity(java.lang.String)
//  .suppress(java.lang.Boolean|IResolvable)
//  .suspend(java.lang.Number)
//  .variable(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.annotate">annotate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.dropEvent">dropEvent</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.extraction">extraction</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>></code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.incidentCustomFieldUpdate">incidentCustomFieldUpdate</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>></code> | incident_custom_field_update block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suppress">suppress</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>></code> | variable block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}.

---

##### `automationAction`<sup>Optional</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.automationAction"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationAction getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}

---

##### `dropEvent`<sup>Optional</sup> <a name="dropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.dropEvent"></a>

```java
public java.lang.Boolean|IResolvable getDropEvent();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}.

---

##### `escalationPolicy`<sup>Optional</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}.

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}.

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.extraction"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsExtraction> getExtraction();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>>

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}

---

##### `incidentCustomFieldUpdate`<sup>Optional</sup> <a name="incidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.incidentCustomFieldUpdate"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate> getIncidentCustomFieldUpdate();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>>

incident_custom_field_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}.

---

##### `routeTo`<sup>Optional</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}.

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suppress"></a>

```java
public java.lang.Boolean|IResolvable getSuppress();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions.property.variable"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsVariable> getVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}

---

### EventOrchestrationGlobalCatchAllActionsAutomationAction <a name="EventOrchestrationGlobalCatchAllActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationAction;

EventOrchestrationGlobalCatchAllActionsAutomationAction.builder()
    .name(java.lang.String)
    .url(java.lang.String)
//  .autoSend(java.lang.Boolean|IResolvable)
//  .header(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionHeader>)
//  .parameter(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionParameter>)
//  .triggerTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}.

---

##### `autoSend`<sup>Optional</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.autoSend"></a>

```java
public java.lang.Boolean|IResolvable getAutoSend();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.header"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionHeader> getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.parameter"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionParameter> getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}

---

##### `triggerTypes`<sup>Optional</sup> <a name="triggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}.

---

### EventOrchestrationGlobalCatchAllActionsAutomationActionHeader <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader;

EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsAutomationActionParameter <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter;

EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsExtraction <a name="EventOrchestrationGlobalCatchAllActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsExtraction;

EventOrchestrationGlobalCatchAllActionsExtraction.builder()
    .target(java.lang.String)
//  .regex(java.lang.String)
//  .source(java.lang.String)
//  .template(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}.

---

### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate;

EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.builder()
    .id(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalCatchAllActionsVariable <a name="EventOrchestrationGlobalCatchAllActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsVariable;

EventOrchestrationGlobalCatchAllActionsVariable.builder()
    .name(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalConfig <a name="EventOrchestrationGlobalConfig" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalConfig;

EventOrchestrationGlobalConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catchAll(EventOrchestrationGlobalCatchAll)
    .eventOrchestration(java.lang.String)
    .set(IResolvable|java.util.List<EventOrchestrationGlobalSet>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.eventOrchestration">eventOrchestration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.set">set</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>></code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.catchAll"></a>

```java
public EventOrchestrationGlobalCatchAll getCatchAll();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#catch_all EventOrchestrationGlobal#catch_all}

---

##### `eventOrchestration`<sup>Required</sup> <a name="eventOrchestration" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.eventOrchestration"></a>

```java
public java.lang.String getEventOrchestration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_orchestration EventOrchestrationGlobal#event_orchestration}.

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.set"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSet> getSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#set EventOrchestrationGlobal#set}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EventOrchestrationGlobalSet <a name="EventOrchestrationGlobalSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSet;

EventOrchestrationGlobalSet.builder()
    .id(java.lang.String)
//  .rule(IResolvable|java.util.List<EventOrchestrationGlobalSetRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>></code> | rule block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet.property.rule"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRule> getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#rule EventOrchestrationGlobal#rule}

---

### EventOrchestrationGlobalSetRule <a name="EventOrchestrationGlobalSetRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRule;

EventOrchestrationGlobalSetRule.builder()
    .actions(EventOrchestrationGlobalSetRuleActions)
//  .condition(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleCondition>)
//  .disabled(java.lang.Boolean|IResolvable)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.actions"></a>

```java
public EventOrchestrationGlobalSetRuleActions getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#actions EventOrchestrationGlobal#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.condition"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleCondition> getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#condition EventOrchestrationGlobal#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#disabled EventOrchestrationGlobal#disabled}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#label EventOrchestrationGlobal#label}.

---

### EventOrchestrationGlobalSetRuleActions <a name="EventOrchestrationGlobalSetRuleActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActions;

EventOrchestrationGlobalSetRuleActions.builder()
//  .annotate(java.lang.String)
//  .automationAction(EventOrchestrationGlobalSetRuleActionsAutomationAction)
//  .dropEvent(java.lang.Boolean|IResolvable)
//  .escalationPolicy(java.lang.String)
//  .eventAction(java.lang.String)
//  .extraction(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsExtraction>)
//  .incidentCustomFieldUpdate(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate>)
//  .priority(java.lang.String)
//  .routeTo(java.lang.String)
//  .severity(java.lang.String)
//  .suppress(java.lang.Boolean|IResolvable)
//  .suspend(java.lang.Number)
//  .variable(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.annotate">annotate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.dropEvent">dropEvent</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.extraction">extraction</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>></code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.incidentCustomFieldUpdate">incidentCustomFieldUpdate</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>></code> | incident_custom_field_update block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suppress">suppress</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>></code> | variable block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#annotate EventOrchestrationGlobal#annotate}.

---

##### `automationAction`<sup>Optional</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.automationAction"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationAction getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#automation_action EventOrchestrationGlobal#automation_action}

---

##### `dropEvent`<sup>Optional</sup> <a name="dropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.dropEvent"></a>

```java
public java.lang.Boolean|IResolvable getDropEvent();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#drop_event EventOrchestrationGlobal#drop_event}.

---

##### `escalationPolicy`<sup>Optional</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#escalation_policy EventOrchestrationGlobal#escalation_policy}.

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#event_action EventOrchestrationGlobal#event_action}.

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.extraction"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsExtraction> getExtraction();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>>

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#extraction EventOrchestrationGlobal#extraction}

---

##### `incidentCustomFieldUpdate`<sup>Optional</sup> <a name="incidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.incidentCustomFieldUpdate"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate> getIncidentCustomFieldUpdate();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>>

incident_custom_field_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#incident_custom_field_update EventOrchestrationGlobal#incident_custom_field_update}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#priority EventOrchestrationGlobal#priority}.

---

##### `routeTo`<sup>Optional</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#route_to EventOrchestrationGlobal#route_to}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#severity EventOrchestrationGlobal#severity}.

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suppress"></a>

```java
public java.lang.Boolean|IResolvable getSuppress();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suppress EventOrchestrationGlobal#suppress}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#suspend EventOrchestrationGlobal#suspend}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions.property.variable"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsVariable> getVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#variable EventOrchestrationGlobal#variable}

---

### EventOrchestrationGlobalSetRuleActionsAutomationAction <a name="EventOrchestrationGlobalSetRuleActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationAction;

EventOrchestrationGlobalSetRuleActionsAutomationAction.builder()
    .name(java.lang.String)
    .url(java.lang.String)
//  .autoSend(java.lang.Boolean|IResolvable)
//  .header(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionHeader>)
//  .parameter(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionParameter>)
//  .triggerTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#url EventOrchestrationGlobal#url}.

---

##### `autoSend`<sup>Optional</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.autoSend"></a>

```java
public java.lang.Boolean|IResolvable getAutoSend();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#auto_send EventOrchestrationGlobal#auto_send}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.header"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionHeader> getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#header EventOrchestrationGlobal#header}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.parameter"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionParameter> getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#parameter EventOrchestrationGlobal#parameter}

---

##### `triggerTypes`<sup>Optional</sup> <a name="triggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#trigger_types EventOrchestrationGlobal#trigger_types}.

---

### EventOrchestrationGlobalSetRuleActionsAutomationActionHeader <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader;

EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsAutomationActionParameter <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter;

EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#key EventOrchestrationGlobal#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsExtraction <a name="EventOrchestrationGlobalSetRuleActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsExtraction;

EventOrchestrationGlobalSetRuleActionsExtraction.builder()
    .target(java.lang.String)
//  .regex(java.lang.String)
//  .source(java.lang.String)
//  .template(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#target EventOrchestrationGlobal#target}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#regex EventOrchestrationGlobal#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#source EventOrchestrationGlobal#source}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#template EventOrchestrationGlobal#template}.

---

### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate;

EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.builder()
    .id(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#id EventOrchestrationGlobal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleActionsVariable <a name="EventOrchestrationGlobalSetRuleActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsVariable;

EventOrchestrationGlobalSetRuleActionsVariable.builder()
    .name(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#name EventOrchestrationGlobal#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#path EventOrchestrationGlobal#path}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#type EventOrchestrationGlobal#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#value EventOrchestrationGlobal#value}.

---

### EventOrchestrationGlobalSetRuleCondition <a name="EventOrchestrationGlobalSetRuleCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleCondition;

EventOrchestrationGlobalSetRuleCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.30.2/docs/resources/event_orchestration_global#expression EventOrchestrationGlobal#expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList;

new EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionHeader> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>>

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference;

new EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalCatchAllActionsAutomationActionHeader getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference;

new EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetAutoSend">resetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetTriggerTypes">resetTriggerTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>>

---

##### `resetAutoSend` <a name="resetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetAutoSend"></a>

```java
public void resetAutoSend()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetTriggerTypes` <a name="resetTriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.resetTriggerTypes"></a>

```java
public void resetTriggerTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList">EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList">EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSendInput">autoSendInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypesInput">triggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.header"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList">EventOrchestrationGlobalCatchAllActionsAutomationActionHeaderList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameter"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList">EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList</a>

---

##### `autoSendInput`<sup>Optional</sup> <a name="autoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSendInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoSendInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.headerInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionHeader> getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionHeader">EventOrchestrationGlobalCatchAllActionsAutomationActionHeader</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.parameterInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionParameter> getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>>

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `autoSend`<sup>Required</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.autoSend"></a>

```java
public java.lang.Boolean|IResolvable getAutoSend();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference.property.internalValue"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList;

new EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsAutomationActionParameter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>>

---


### EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference <a name="EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference;

new EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalCatchAllActionsAutomationActionParameter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionParameter">EventOrchestrationGlobalCatchAllActionsAutomationActionParameter</a>

---


### EventOrchestrationGlobalCatchAllActionsExtractionList <a name="EventOrchestrationGlobalCatchAllActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsExtractionList;

new EventOrchestrationGlobalCatchAllActionsExtractionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get"></a>

```java
public EventOrchestrationGlobalCatchAllActionsExtractionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsExtraction> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>>

---


### EventOrchestrationGlobalCatchAllActionsExtractionOutputReference <a name="EventOrchestrationGlobalCatchAllActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference;

new EventOrchestrationGlobalCatchAllActionsExtractionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.resetTemplate"></a>

```java
public void resetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalCatchAllActionsExtraction getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>

---


### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList;

new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get"></a>

```java
public EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>>

---


### EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference <a name="EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference;

new EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>

---


### EventOrchestrationGlobalCatchAllActionsOutputReference <a name="EventOrchestrationGlobalCatchAllActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsOutputReference;

new EventOrchestrationGlobalCatchAllActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction">putAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate">putIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAutomationAction">resetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetDropEvent">resetDropEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEscalationPolicy">resetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetIncidentCustomFieldUpdate">resetIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetRouteTo">resetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationAction` <a name="putAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction"></a>

```java
public void putAutomationAction(EventOrchestrationGlobalCatchAllActionsAutomationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction"></a>

```java
public void putExtraction(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsExtraction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>>

---

##### `putIncidentCustomFieldUpdate` <a name="putIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate"></a>

```java
public void putIncidentCustomFieldUpdate(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putIncidentCustomFieldUpdate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable"></a>

```java
public void putVariable(IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>>

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAnnotate"></a>

```java
public void resetAnnotate()
```

##### `resetAutomationAction` <a name="resetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetAutomationAction"></a>

```java
public void resetAutomationAction()
```

##### `resetDropEvent` <a name="resetDropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetDropEvent"></a>

```java
public void resetDropEvent()
```

##### `resetEscalationPolicy` <a name="resetEscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEscalationPolicy"></a>

```java
public void resetEscalationPolicy()
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetEventAction"></a>

```java
public void resetEventAction()
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetExtraction"></a>

```java
public void resetExtraction()
```

##### `resetIncidentCustomFieldUpdate` <a name="resetIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetIncidentCustomFieldUpdate"></a>

```java
public void resetIncidentCustomFieldUpdate()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRouteTo` <a name="resetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetRouteTo"></a>

```java
public void resetRouteTo()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuppress"></a>

```java
public void resetSuppress()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetSuspend"></a>

```java
public void resetSuspend()
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.resetVariable"></a>

```java
public void resetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference">EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList">EventOrchestrationGlobalCatchAllActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdate">incidentCustomFieldUpdate</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList">EventOrchestrationGlobalCatchAllActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationActionInput">automationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEventInput">dropEventInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicyInput">escalationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extractionInput">extractionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdateInput">incidentCustomFieldUpdateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeToInput">routeToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variableInput">variableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotate">annotate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEvent">dropEvent</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppress">suppress</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automationAction`<sup>Required</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationAction"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference">EventOrchestrationGlobalCatchAllActionsAutomationActionOutputReference</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extraction"></a>

```java
public EventOrchestrationGlobalCatchAllActionsExtractionList getExtraction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtractionList">EventOrchestrationGlobalCatchAllActionsExtractionList</a>

---

##### `incidentCustomFieldUpdate`<sup>Required</sup> <a name="incidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdate"></a>

```java
public EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList getIncidentCustomFieldUpdate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdateList</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variable"></a>

```java
public EventOrchestrationGlobalCatchAllActionsVariableList getVariable();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList">EventOrchestrationGlobalCatchAllActionsVariableList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotateInput"></a>

```java
public java.lang.String getAnnotateInput();
```

- *Type:* java.lang.String

---

##### `automationActionInput`<sup>Optional</sup> <a name="automationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.automationActionInput"></a>

```java
public EventOrchestrationGlobalCatchAllActionsAutomationAction getAutomationActionInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsAutomationAction">EventOrchestrationGlobalCatchAllActionsAutomationAction</a>

---

##### `dropEventInput`<sup>Optional</sup> <a name="dropEventInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEventInput"></a>

```java
public java.lang.Boolean|IResolvable getDropEventInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="escalationPolicyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicyInput"></a>

```java
public java.lang.String getEscalationPolicyInput();
```

- *Type:* java.lang.String

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.extractionInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsExtraction> getExtractionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsExtraction">EventOrchestrationGlobalCatchAllActionsExtraction</a>>

---

##### `incidentCustomFieldUpdateInput`<sup>Optional</sup> <a name="incidentCustomFieldUpdateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.incidentCustomFieldUpdateInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate> getIncidentCustomFieldUpdateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalCatchAllActionsIncidentCustomFieldUpdate</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `routeToInput`<sup>Optional</sup> <a name="routeToInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeToInput"></a>

```java
public java.lang.String getRouteToInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppressInput"></a>

```java
public java.lang.Boolean|IResolvable getSuppressInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspendInput"></a>

```java
public java.lang.Number getSuspendInput();
```

- *Type:* java.lang.Number

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.variableInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsVariable> getVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>>

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

---

##### `dropEvent`<sup>Required</sup> <a name="dropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.dropEvent"></a>

```java
public java.lang.Boolean|IResolvable getDropEvent();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `routeTo`<sup>Required</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suppress"></a>

```java
public java.lang.Boolean|IResolvable getSuppress();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference.property.internalValue"></a>

```java
public EventOrchestrationGlobalCatchAllActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---


### EventOrchestrationGlobalCatchAllActionsVariableList <a name="EventOrchestrationGlobalCatchAllActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsVariableList;

new EventOrchestrationGlobalCatchAllActionsVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get"></a>

```java
public EventOrchestrationGlobalCatchAllActionsVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalCatchAllActionsVariable> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>>

---


### EventOrchestrationGlobalCatchAllActionsVariableOutputReference <a name="EventOrchestrationGlobalCatchAllActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllActionsVariableOutputReference;

new EventOrchestrationGlobalCatchAllActionsVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariableOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalCatchAllActionsVariable getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsVariable">EventOrchestrationGlobalCatchAllActionsVariable</a>

---


### EventOrchestrationGlobalCatchAllOutputReference <a name="EventOrchestrationGlobalCatchAllOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalCatchAllOutputReference;

new EventOrchestrationGlobalCatchAllOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions"></a>

```java
public void putActions(EventOrchestrationGlobalCatchAllActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference">EventOrchestrationGlobalCatchAllActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actions"></a>

```java
public EventOrchestrationGlobalCatchAllActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActionsOutputReference">EventOrchestrationGlobalCatchAllActionsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.actionsInput"></a>

```java
public EventOrchestrationGlobalCatchAllActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllActions">EventOrchestrationGlobalCatchAllActions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAllOutputReference.property.internalValue"></a>

```java
public EventOrchestrationGlobalCatchAll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalCatchAll">EventOrchestrationGlobalCatchAll</a>

---


### EventOrchestrationGlobalSetList <a name="EventOrchestrationGlobalSetList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetList;

new EventOrchestrationGlobalSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get"></a>

```java
public EventOrchestrationGlobalSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSet> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>>

---


### EventOrchestrationGlobalSetOutputReference <a name="EventOrchestrationGlobalSetOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetOutputReference;

new EventOrchestrationGlobalSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<EventOrchestrationGlobalSetRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList">EventOrchestrationGlobalSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.rule"></a>

```java
public EventOrchestrationGlobalSetRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList">EventOrchestrationGlobalSetRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.ruleInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRule> getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSet getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSet">EventOrchestrationGlobalSet</a>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList;

new EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionHeader> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference;

new EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRuleActionsAutomationActionHeader getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference;

new EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetAutoSend">resetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetTriggerTypes">resetTriggerTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>>

---

##### `resetAutoSend` <a name="resetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetAutoSend"></a>

```java
public void resetAutoSend()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetTriggerTypes` <a name="resetTriggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.resetTriggerTypes"></a>

```java
public void resetTriggerTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList">EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList">EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSendInput">autoSendInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypesInput">triggerTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypes">triggerTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.header"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList">EventOrchestrationGlobalSetRuleActionsAutomationActionHeaderList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameter"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList">EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList</a>

---

##### `autoSendInput`<sup>Optional</sup> <a name="autoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSendInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoSendInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.headerInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionHeader> getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionHeader">EventOrchestrationGlobalSetRuleActionsAutomationActionHeader</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.parameterInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionParameter> getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>>

---

##### `triggerTypesInput`<sup>Optional</sup> <a name="triggerTypesInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypesInput"></a>

```java
public java.util.List<java.lang.String> getTriggerTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `autoSend`<sup>Required</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.autoSend"></a>

```java
public java.lang.Boolean|IResolvable getAutoSend();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `triggerTypes`<sup>Required</sup> <a name="triggerTypes" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.triggerTypes"></a>

```java
public java.util.List<java.lang.String> getTriggerTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference.property.internalValue"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList;

new EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsAutomationActionParameter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>>

---


### EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference <a name="EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference;

new EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRuleActionsAutomationActionParameter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionParameter">EventOrchestrationGlobalSetRuleActionsAutomationActionParameter</a>

---


### EventOrchestrationGlobalSetRuleActionsExtractionList <a name="EventOrchestrationGlobalSetRuleActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsExtractionList;

new EventOrchestrationGlobalSetRuleActionsExtractionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get"></a>

```java
public EventOrchestrationGlobalSetRuleActionsExtractionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsExtraction> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>>

---


### EventOrchestrationGlobalSetRuleActionsExtractionOutputReference <a name="EventOrchestrationGlobalSetRuleActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference;

new EventOrchestrationGlobalSetRuleActionsExtractionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.resetTemplate"></a>

```java
public void resetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRuleActionsExtraction getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>

---


### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList;

new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get"></a>

```java
public EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>>

---


### EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference <a name="EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference;

new EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>

---


### EventOrchestrationGlobalSetRuleActionsOutputReference <a name="EventOrchestrationGlobalSetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsOutputReference;

new EventOrchestrationGlobalSetRuleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction">putAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate">putIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAutomationAction">resetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetDropEvent">resetDropEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEscalationPolicy">resetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetIncidentCustomFieldUpdate">resetIncidentCustomFieldUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetRouteTo">resetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationAction` <a name="putAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction"></a>

```java
public void putAutomationAction(EventOrchestrationGlobalSetRuleActionsAutomationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction"></a>

```java
public void putExtraction(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsExtraction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>>

---

##### `putIncidentCustomFieldUpdate` <a name="putIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate"></a>

```java
public void putIncidentCustomFieldUpdate(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putIncidentCustomFieldUpdate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable"></a>

```java
public void putVariable(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>>

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAnnotate"></a>

```java
public void resetAnnotate()
```

##### `resetAutomationAction` <a name="resetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetAutomationAction"></a>

```java
public void resetAutomationAction()
```

##### `resetDropEvent` <a name="resetDropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetDropEvent"></a>

```java
public void resetDropEvent()
```

##### `resetEscalationPolicy` <a name="resetEscalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEscalationPolicy"></a>

```java
public void resetEscalationPolicy()
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetEventAction"></a>

```java
public void resetEventAction()
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetExtraction"></a>

```java
public void resetExtraction()
```

##### `resetIncidentCustomFieldUpdate` <a name="resetIncidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetIncidentCustomFieldUpdate"></a>

```java
public void resetIncidentCustomFieldUpdate()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRouteTo` <a name="resetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetRouteTo"></a>

```java
public void resetRouteTo()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuppress"></a>

```java
public void resetSuppress()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetSuspend"></a>

```java
public void resetSuspend()
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.resetVariable"></a>

```java
public void resetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference">EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList">EventOrchestrationGlobalSetRuleActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdate">incidentCustomFieldUpdate</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList">EventOrchestrationGlobalSetRuleActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationActionInput">automationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEventInput">dropEventInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicyInput">escalationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extractionInput">extractionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdateInput">incidentCustomFieldUpdateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeToInput">routeToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variableInput">variableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotate">annotate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEvent">dropEvent</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicy">escalationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppress">suppress</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automationAction`<sup>Required</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationAction"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference">EventOrchestrationGlobalSetRuleActionsAutomationActionOutputReference</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extraction"></a>

```java
public EventOrchestrationGlobalSetRuleActionsExtractionList getExtraction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtractionList">EventOrchestrationGlobalSetRuleActionsExtractionList</a>

---

##### `incidentCustomFieldUpdate`<sup>Required</sup> <a name="incidentCustomFieldUpdate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdate"></a>

```java
public EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList getIncidentCustomFieldUpdate();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdateList</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variable"></a>

```java
public EventOrchestrationGlobalSetRuleActionsVariableList getVariable();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList">EventOrchestrationGlobalSetRuleActionsVariableList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotateInput"></a>

```java
public java.lang.String getAnnotateInput();
```

- *Type:* java.lang.String

---

##### `automationActionInput`<sup>Optional</sup> <a name="automationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.automationActionInput"></a>

```java
public EventOrchestrationGlobalSetRuleActionsAutomationAction getAutomationActionInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsAutomationAction">EventOrchestrationGlobalSetRuleActionsAutomationAction</a>

---

##### `dropEventInput`<sup>Optional</sup> <a name="dropEventInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEventInput"></a>

```java
public java.lang.Boolean|IResolvable getDropEventInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `escalationPolicyInput`<sup>Optional</sup> <a name="escalationPolicyInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicyInput"></a>

```java
public java.lang.String getEscalationPolicyInput();
```

- *Type:* java.lang.String

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.extractionInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsExtraction> getExtractionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsExtraction">EventOrchestrationGlobalSetRuleActionsExtraction</a>>

---

##### `incidentCustomFieldUpdateInput`<sup>Optional</sup> <a name="incidentCustomFieldUpdateInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.incidentCustomFieldUpdateInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate> getIncidentCustomFieldUpdateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate">EventOrchestrationGlobalSetRuleActionsIncidentCustomFieldUpdate</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `routeToInput`<sup>Optional</sup> <a name="routeToInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeToInput"></a>

```java
public java.lang.String getRouteToInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppressInput"></a>

```java
public java.lang.Boolean|IResolvable getSuppressInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspendInput"></a>

```java
public java.lang.Number getSuspendInput();
```

- *Type:* java.lang.Number

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.variableInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsVariable> getVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>>

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

---

##### `dropEvent`<sup>Required</sup> <a name="dropEvent" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.dropEvent"></a>

```java
public java.lang.Boolean|IResolvable getDropEvent();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `escalationPolicy`<sup>Required</sup> <a name="escalationPolicy" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.escalationPolicy"></a>

```java
public java.lang.String getEscalationPolicy();
```

- *Type:* java.lang.String

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `routeTo`<sup>Required</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suppress"></a>

```java
public java.lang.Boolean|IResolvable getSuppress();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference.property.internalValue"></a>

```java
public EventOrchestrationGlobalSetRuleActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---


### EventOrchestrationGlobalSetRuleActionsVariableList <a name="EventOrchestrationGlobalSetRuleActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsVariableList;

new EventOrchestrationGlobalSetRuleActionsVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get"></a>

```java
public EventOrchestrationGlobalSetRuleActionsVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleActionsVariable> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>>

---


### EventOrchestrationGlobalSetRuleActionsVariableOutputReference <a name="EventOrchestrationGlobalSetRuleActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleActionsVariableOutputReference;

new EventOrchestrationGlobalSetRuleActionsVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariableOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRuleActionsVariable getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsVariable">EventOrchestrationGlobalSetRuleActionsVariable</a>

---


### EventOrchestrationGlobalSetRuleConditionList <a name="EventOrchestrationGlobalSetRuleConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleConditionList;

new EventOrchestrationGlobalSetRuleConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get"></a>

```java
public EventOrchestrationGlobalSetRuleConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleCondition> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>>

---


### EventOrchestrationGlobalSetRuleConditionOutputReference <a name="EventOrchestrationGlobalSetRuleConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleConditionOutputReference;

new EventOrchestrationGlobalSetRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRuleCondition getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>

---


### EventOrchestrationGlobalSetRuleList <a name="EventOrchestrationGlobalSetRuleList" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleList;

new EventOrchestrationGlobalSetRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get"></a>

```java
public EventOrchestrationGlobalSetRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>>

---


### EventOrchestrationGlobalSetRuleOutputReference <a name="EventOrchestrationGlobalSetRuleOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_global.EventOrchestrationGlobalSetRuleOutputReference;

new EventOrchestrationGlobalSetRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions"></a>

```java
public void putActions(EventOrchestrationGlobalSetRuleActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable|java.util.List<EventOrchestrationGlobalSetRuleCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference">EventOrchestrationGlobalSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList">EventOrchestrationGlobalSetRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actions"></a>

```java
public EventOrchestrationGlobalSetRuleActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActionsOutputReference">EventOrchestrationGlobalSetRuleActionsOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.condition"></a>

```java
public EventOrchestrationGlobalSetRuleConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleConditionList">EventOrchestrationGlobalSetRuleConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.actionsInput"></a>

```java
public EventOrchestrationGlobalSetRuleActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleActions">EventOrchestrationGlobalSetRuleActions</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.conditionInput"></a>

```java
public IResolvable|java.util.List<EventOrchestrationGlobalSetRuleCondition> getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleCondition">EventOrchestrationGlobalSetRuleCondition</a>>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|EventOrchestrationGlobalSetRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-pagerduty.eventOrchestrationGlobal.EventOrchestrationGlobalSetRule">EventOrchestrationGlobalSetRule</a>

---



