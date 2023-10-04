# `pagerduty_event_orchestration_service`

Refer to the Terraform Registory for docs: [`pagerduty_event_orchestration_service`](https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service).

# `eventOrchestrationService` Submodule <a name="`eventOrchestrationService` Submodule" id="@cdktf/provider-pagerduty.eventOrchestrationService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventOrchestrationService <a name="EventOrchestrationService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service pagerduty_event_orchestration_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationService;

EventOrchestrationService.Builder.create(Construct scope, java.lang.String id)
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
    .catchAll(EventOrchestrationServiceCatchAll)
    .service(java.lang.String)
    .set(IResolvable)
    .set(java.util.List<EventOrchestrationServiceSet>)
//  .enableEventOrchestrationForService(java.lang.Boolean)
//  .enableEventOrchestrationForService(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#service EventOrchestrationService#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.set">set</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>></code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.enableEventOrchestrationForService">enableEventOrchestrationForService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#id EventOrchestrationService#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.catchAll"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#catch_all EventOrchestrationService#catch_all}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#service EventOrchestrationService#service}.

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.set"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#set EventOrchestrationService#set}

---

##### `enableEventOrchestrationForService`<sup>Optional</sup> <a name="enableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.enableEventOrchestrationForService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#id EventOrchestrationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putCatchAll">putCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetEnableEventOrchestrationForService">resetEnableEventOrchestrationForService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCatchAll` <a name="putCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putCatchAll"></a>

```java
public void putCatchAll(EventOrchestrationServiceCatchAll value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putCatchAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putSet"></a>

```java
public void putSet(IResolvable OR java.util.List<EventOrchestrationServiceSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.putSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>>

---

##### `resetEnableEventOrchestrationForService` <a name="resetEnableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetEnableEventOrchestrationForService"></a>

```java
public void resetEnableEventOrchestrationForService()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationService;

EventOrchestrationService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationService;

EventOrchestrationService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationService;

EventOrchestrationService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference">EventOrchestrationServiceCatchAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.set">set</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList">EventOrchestrationServiceSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAllInput">catchAllInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForServiceInput">enableEventOrchestrationForServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.setInput">setInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForService">enableEventOrchestrationForService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAll"></a>

```java
public EventOrchestrationServiceCatchAllOutputReference getCatchAll();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference">EventOrchestrationServiceCatchAllOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.set"></a>

```java
public EventOrchestrationServiceSetList getSet();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList">EventOrchestrationServiceSetList</a>

---

##### `catchAllInput`<sup>Optional</sup> <a name="catchAllInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.catchAllInput"></a>

```java
public EventOrchestrationServiceCatchAll getCatchAllInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

---

##### `enableEventOrchestrationForServiceInput`<sup>Optional</sup> <a name="enableEventOrchestrationForServiceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForServiceInput"></a>

```java
public java.lang.Object getEnableEventOrchestrationForServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.setInput"></a>

```java
public java.lang.Object getSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>>

---

##### `enableEventOrchestrationForService`<sup>Required</sup> <a name="enableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.enableEventOrchestrationForService"></a>

```java
public java.lang.Object getEnableEventOrchestrationForService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventOrchestrationServiceCatchAll <a name="EventOrchestrationServiceCatchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAll;

EventOrchestrationServiceCatchAll.builder()
    .actions(EventOrchestrationServiceCatchAllActions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a></code> | actions block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll.property.actions"></a>

```java
public EventOrchestrationServiceCatchAllActions getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#actions EventOrchestrationService#actions}

---

### EventOrchestrationServiceCatchAllActions <a name="EventOrchestrationServiceCatchAllActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActions;

EventOrchestrationServiceCatchAllActions.builder()
//  .annotate(java.lang.String)
//  .automationAction(EventOrchestrationServiceCatchAllActionsAutomationAction)
//  .eventAction(java.lang.String)
//  .extraction(IResolvable)
//  .extraction(java.util.List<EventOrchestrationServiceCatchAllActionsExtraction>)
//  .pagerdutyAutomationAction(EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction)
//  .priority(java.lang.String)
//  .routeTo(java.lang.String)
//  .severity(java.lang.String)
//  .suppress(java.lang.Boolean)
//  .suppress(IResolvable)
//  .suspend(java.lang.Number)
//  .variable(IResolvable)
//  .variable(java.util.List<EventOrchestrationServiceCatchAllActionsVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.annotate">annotate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.extraction">extraction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>></code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a></code> | pagerduty_automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suppress">suppress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>></code> | variable block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}.

---

##### `automationAction`<sup>Optional</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.automationAction"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationAction getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#automation_action EventOrchestrationService#automation_action}

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}.

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.extraction"></a>

```java
public java.lang.Object getExtraction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>>

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#extraction EventOrchestrationService#extraction}

---

##### `pagerdutyAutomationAction`<sup>Optional</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.pagerdutyAutomationAction"></a>

```java
public EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction getPagerdutyAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

pagerduty_automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#pagerduty_automation_action EventOrchestrationService#pagerduty_automation_action}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}.

---

##### `routeTo`<sup>Optional</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}.

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suppress"></a>

```java
public java.lang.Object getSuppress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions.property.variable"></a>

```java
public java.lang.Object getVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#variable EventOrchestrationService#variable}

---

### EventOrchestrationServiceCatchAllActionsAutomationAction <a name="EventOrchestrationServiceCatchAllActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationAction;

EventOrchestrationServiceCatchAllActionsAutomationAction.builder()
    .name(java.lang.String)
    .url(java.lang.String)
//  .autoSend(java.lang.Boolean)
//  .autoSend(IResolvable)
//  .header(IResolvable)
//  .header(java.util.List<EventOrchestrationServiceCatchAllActionsAutomationActionHeader>)
//  .parameter(IResolvable)
//  .parameter(java.util.List<EventOrchestrationServiceCatchAllActionsAutomationActionParameter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#url EventOrchestrationService#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>></code> | parameter block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#url EventOrchestrationService#url}.

---

##### `autoSend`<sup>Optional</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.autoSend"></a>

```java
public java.lang.Object getAutoSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#header EventOrchestrationService#header}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction.property.parameter"></a>

```java
public java.lang.Object getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#parameter EventOrchestrationService#parameter}

---

### EventOrchestrationServiceCatchAllActionsAutomationActionHeader <a name="EventOrchestrationServiceCatchAllActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionHeader;

EventOrchestrationServiceCatchAllActionsAutomationActionHeader.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceCatchAllActionsAutomationActionParameter <a name="EventOrchestrationServiceCatchAllActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionParameter;

EventOrchestrationServiceCatchAllActionsAutomationActionParameter.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceCatchAllActionsExtraction <a name="EventOrchestrationServiceCatchAllActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsExtraction;

EventOrchestrationServiceCatchAllActionsExtraction.builder()
    .target(java.lang.String)
//  .regex(java.lang.String)
//  .source(java.lang.String)
//  .template(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#target EventOrchestrationService#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#source EventOrchestrationService#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#template EventOrchestrationService#template}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#target EventOrchestrationService#target}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#source EventOrchestrationService#source}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#template EventOrchestrationService#template}.

---

### EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction <a name="EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction;

EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.builder()
    .actionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.property.actionId">actionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}.

---

### EventOrchestrationServiceCatchAllActionsVariable <a name="EventOrchestrationServiceCatchAllActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsVariable;

EventOrchestrationServiceCatchAllActionsVariable.builder()
    .name(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#path EventOrchestrationService#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#type EventOrchestrationService#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#path EventOrchestrationService#path}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#type EventOrchestrationService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceConfig <a name="EventOrchestrationServiceConfig" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceConfig;

EventOrchestrationServiceConfig.builder()
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
    .catchAll(EventOrchestrationServiceCatchAll)
    .service(java.lang.String)
    .set(IResolvable)
    .set(java.util.List<EventOrchestrationServiceSet>)
//  .enableEventOrchestrationForService(java.lang.Boolean)
//  .enableEventOrchestrationForService(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.catchAll">catchAll</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | catch_all block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#service EventOrchestrationService#service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.set">set</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>></code> | set block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.enableEventOrchestrationForService">enableEventOrchestrationForService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#id EventOrchestrationService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `catchAll`<sup>Required</sup> <a name="catchAll" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.catchAll"></a>

```java
public EventOrchestrationServiceCatchAll getCatchAll();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

catch_all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#catch_all EventOrchestrationService#catch_all}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#service EventOrchestrationService#service}.

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.set"></a>

```java
public java.lang.Object getSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>>

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#set EventOrchestrationService#set}

---

##### `enableEventOrchestrationForService`<sup>Optional</sup> <a name="enableEventOrchestrationForService" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.enableEventOrchestrationForService"></a>

```java
public java.lang.Object getEnableEventOrchestrationForService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#enable_event_orchestration_for_service EventOrchestrationService#enable_event_orchestration_for_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#id EventOrchestrationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EventOrchestrationServiceSet <a name="EventOrchestrationServiceSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSet;

EventOrchestrationServiceSet.builder()
    .id(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<EventOrchestrationServiceSetRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#id EventOrchestrationService#id}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>></code> | rule block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#id EventOrchestrationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#rule EventOrchestrationService#rule}

---

### EventOrchestrationServiceSetRule <a name="EventOrchestrationServiceSetRule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRule;

EventOrchestrationServiceSetRule.builder()
    .actions(EventOrchestrationServiceSetRuleActions)
//  .condition(IResolvable)
//  .condition(java.util.List<EventOrchestrationServiceSetRuleCondition>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a></code> | actions block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.condition">condition</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#disabled EventOrchestrationService#disabled}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#label EventOrchestrationService#label}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.actions"></a>

```java
public EventOrchestrationServiceSetRuleActions getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#actions EventOrchestrationService#actions}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.condition"></a>

```java
public java.lang.Object getCondition();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#condition EventOrchestrationService#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#disabled EventOrchestrationService#disabled}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#label EventOrchestrationService#label}.

---

### EventOrchestrationServiceSetRuleActions <a name="EventOrchestrationServiceSetRuleActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActions;

EventOrchestrationServiceSetRuleActions.builder()
//  .annotate(java.lang.String)
//  .automationAction(EventOrchestrationServiceSetRuleActionsAutomationAction)
//  .eventAction(java.lang.String)
//  .extraction(IResolvable)
//  .extraction(java.util.List<EventOrchestrationServiceSetRuleActionsExtraction>)
//  .pagerdutyAutomationAction(EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction)
//  .priority(java.lang.String)
//  .routeTo(java.lang.String)
//  .severity(java.lang.String)
//  .suppress(java.lang.Boolean)
//  .suppress(IResolvable)
//  .suspend(java.lang.Number)
//  .variable(IResolvable)
//  .variable(java.util.List<EventOrchestrationServiceSetRuleActionsVariable>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.annotate">annotate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a></code> | automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.extraction">extraction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>></code> | extraction block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a></code> | pagerduty_automation_action block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.priority">priority</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.severity">severity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suppress">suppress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.variable">variable</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>></code> | variable block. |

---

##### `annotate`<sup>Optional</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#annotate EventOrchestrationService#annotate}.

---

##### `automationAction`<sup>Optional</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.automationAction"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationAction getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#automation_action EventOrchestrationService#automation_action}

---

##### `eventAction`<sup>Optional</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#event_action EventOrchestrationService#event_action}.

---

##### `extraction`<sup>Optional</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.extraction"></a>

```java
public java.lang.Object getExtraction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>>

extraction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#extraction EventOrchestrationService#extraction}

---

##### `pagerdutyAutomationAction`<sup>Optional</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.pagerdutyAutomationAction"></a>

```java
public EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction getPagerdutyAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

pagerduty_automation_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#pagerduty_automation_action EventOrchestrationService#pagerduty_automation_action}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#priority EventOrchestrationService#priority}.

---

##### `routeTo`<sup>Optional</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#route_to EventOrchestrationService#route_to}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#severity EventOrchestrationService#severity}.

---

##### `suppress`<sup>Optional</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suppress"></a>

```java
public java.lang.Object getSuppress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suppress EventOrchestrationService#suppress}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#suspend EventOrchestrationService#suspend}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions.property.variable"></a>

```java
public java.lang.Object getVariable();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>>

variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#variable EventOrchestrationService#variable}

---

### EventOrchestrationServiceSetRuleActionsAutomationAction <a name="EventOrchestrationServiceSetRuleActionsAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationAction;

EventOrchestrationServiceSetRuleActionsAutomationAction.builder()
    .name(java.lang.String)
    .url(java.lang.String)
//  .autoSend(java.lang.Boolean)
//  .autoSend(IResolvable)
//  .header(IResolvable)
//  .header(java.util.List<EventOrchestrationServiceSetRuleActionsAutomationActionHeader>)
//  .parameter(IResolvable)
//  .parameter(java.util.List<EventOrchestrationServiceSetRuleActionsAutomationActionParameter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#url EventOrchestrationService#url}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>></code> | parameter block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#url EventOrchestrationService#url}.

---

##### `autoSend`<sup>Optional</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.autoSend"></a>

```java
public java.lang.Object getAutoSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#auto_send EventOrchestrationService#auto_send}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#header EventOrchestrationService#header}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction.property.parameter"></a>

```java
public java.lang.Object getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#parameter EventOrchestrationService#parameter}

---

### EventOrchestrationServiceSetRuleActionsAutomationActionHeader <a name="EventOrchestrationServiceSetRuleActionsAutomationActionHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionHeader;

EventOrchestrationServiceSetRuleActionsAutomationActionHeader.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceSetRuleActionsAutomationActionParameter <a name="EventOrchestrationServiceSetRuleActionsAutomationActionParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionParameter;

EventOrchestrationServiceSetRuleActionsAutomationActionParameter.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#key EventOrchestrationService#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceSetRuleActionsExtraction <a name="EventOrchestrationServiceSetRuleActionsExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsExtraction;

EventOrchestrationServiceSetRuleActionsExtraction.builder()
    .target(java.lang.String)
//  .regex(java.lang.String)
//  .source(java.lang.String)
//  .template(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#target EventOrchestrationService#target}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#source EventOrchestrationService#source}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.template">template</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#template EventOrchestrationService#template}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#target EventOrchestrationService#target}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#regex EventOrchestrationService#regex}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#source EventOrchestrationService#source}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#template EventOrchestrationService#template}.

---

### EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction <a name="EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction;

EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.builder()
    .actionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.property.actionId">actionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}. |

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#action_id EventOrchestrationService#action_id}.

---

### EventOrchestrationServiceSetRuleActionsVariable <a name="EventOrchestrationServiceSetRuleActionsVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsVariable;

EventOrchestrationServiceSetRuleActionsVariable.builder()
    .name(java.lang.String)
    .path(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#path EventOrchestrationService#path}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#type EventOrchestrationService#type}. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#name EventOrchestrationService#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#path EventOrchestrationService#path}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#type EventOrchestrationService#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#value EventOrchestrationService#value}.

---

### EventOrchestrationServiceSetRuleCondition <a name="EventOrchestrationServiceSetRuleCondition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleCondition;

EventOrchestrationServiceSetRuleCondition.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#expression EventOrchestrationService#expression}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.0.1/docs/resources/event_orchestration_service#expression EventOrchestrationService#expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList <a name="EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList;

new EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.get"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>>

---


### EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference;

new EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>

---


### EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference <a name="EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference;

new EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetAutoSend">resetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<EventOrchestrationServiceCatchAllActionsAutomationActionHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable OR java.util.List<EventOrchestrationServiceCatchAllActionsAutomationActionParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>>

---

##### `resetAutoSend` <a name="resetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetAutoSend"></a>

```java
public void resetAutoSend()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.resetParameter"></a>

```java
public void resetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList">EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList">EventOrchestrationServiceCatchAllActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSendInput">autoSendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.header"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList">EventOrchestrationServiceCatchAllActionsAutomationActionHeaderList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameter"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationActionParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList">EventOrchestrationServiceCatchAllActionsAutomationActionParameterList</a>

---

##### `autoSendInput`<sup>Optional</sup> <a name="autoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSendInput"></a>

```java
public java.lang.Object getAutoSendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionHeader">EventOrchestrationServiceCatchAllActionsAutomationActionHeader</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.parameterInput"></a>

```java
public java.lang.Object getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `autoSend`<sup>Required</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.autoSend"></a>

```java
public java.lang.Object getAutoSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

---


### EventOrchestrationServiceCatchAllActionsAutomationActionParameterList <a name="EventOrchestrationServiceCatchAllActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList;

new EventOrchestrationServiceCatchAllActionsAutomationActionParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.get"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>>

---


### EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference <a name="EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference;

new EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionParameter">EventOrchestrationServiceCatchAllActionsAutomationActionParameter</a>

---


### EventOrchestrationServiceCatchAllActionsExtractionList <a name="EventOrchestrationServiceCatchAllActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsExtractionList;

new EventOrchestrationServiceCatchAllActionsExtractionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.get"></a>

```java
public EventOrchestrationServiceCatchAllActionsExtractionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>>

---


### EventOrchestrationServiceCatchAllActionsExtractionOutputReference <a name="EventOrchestrationServiceCatchAllActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsExtractionOutputReference;

new EventOrchestrationServiceCatchAllActionsExtractionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.resetTemplate"></a>

```java
public void resetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>

---


### EventOrchestrationServiceCatchAllActionsOutputReference <a name="EventOrchestrationServiceCatchAllActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsOutputReference;

new EventOrchestrationServiceCatchAllActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putAutomationAction">putAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putPagerdutyAutomationAction">putPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAutomationAction">resetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPagerdutyAutomationAction">resetPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetRouteTo">resetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationAction` <a name="putAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putAutomationAction"></a>

```java
public void putAutomationAction(EventOrchestrationServiceCatchAllActionsAutomationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putExtraction"></a>

```java
public void putExtraction(IResolvable OR java.util.List<EventOrchestrationServiceCatchAllActionsExtraction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>>

---

##### `putPagerdutyAutomationAction` <a name="putPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putPagerdutyAutomationAction"></a>

```java
public void putPagerdutyAutomationAction(EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putPagerdutyAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putVariable"></a>

```java
public void putVariable(IResolvable OR java.util.List<EventOrchestrationServiceCatchAllActionsVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>>

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAnnotate"></a>

```java
public void resetAnnotate()
```

##### `resetAutomationAction` <a name="resetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetAutomationAction"></a>

```java
public void resetAutomationAction()
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetEventAction"></a>

```java
public void resetEventAction()
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetExtraction"></a>

```java
public void resetExtraction()
```

##### `resetPagerdutyAutomationAction` <a name="resetPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPagerdutyAutomationAction"></a>

```java
public void resetPagerdutyAutomationAction()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRouteTo` <a name="resetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetRouteTo"></a>

```java
public void resetRouteTo()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuppress"></a>

```java
public void resetSuppress()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetSuspend"></a>

```java
public void resetSuspend()
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.resetVariable"></a>

```java
public void resetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList">EventOrchestrationServiceCatchAllActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList">EventOrchestrationServiceCatchAllActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationActionInput">automationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extractionInput">extractionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationActionInput">pagerdutyAutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeToInput">routeToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variableInput">variableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotate">annotate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppress">suppress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automationAction`<sup>Required</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationAction"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsAutomationActionOutputReference</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extraction"></a>

```java
public EventOrchestrationServiceCatchAllActionsExtractionList getExtraction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtractionList">EventOrchestrationServiceCatchAllActionsExtractionList</a>

---

##### `pagerdutyAutomationAction`<sup>Required</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationAction"></a>

```java
public EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference getPagerdutyAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variable"></a>

```java
public EventOrchestrationServiceCatchAllActionsVariableList getVariable();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList">EventOrchestrationServiceCatchAllActionsVariableList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotateInput"></a>

```java
public java.lang.String getAnnotateInput();
```

- *Type:* java.lang.String

---

##### `automationActionInput`<sup>Optional</sup> <a name="automationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.automationActionInput"></a>

```java
public EventOrchestrationServiceCatchAllActionsAutomationAction getAutomationActionInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsAutomationAction">EventOrchestrationServiceCatchAllActionsAutomationAction</a>

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.extractionInput"></a>

```java
public java.lang.Object getExtractionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsExtraction">EventOrchestrationServiceCatchAllActionsExtraction</a>>

---

##### `pagerdutyAutomationActionInput`<sup>Optional</sup> <a name="pagerdutyAutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.pagerdutyAutomationActionInput"></a>

```java
public EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction getPagerdutyAutomationActionInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `routeToInput`<sup>Optional</sup> <a name="routeToInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeToInput"></a>

```java
public java.lang.String getRouteToInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppressInput"></a>

```java
public java.lang.Object getSuppressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspendInput"></a>

```java
public java.lang.Number getSuspendInput();
```

- *Type:* java.lang.Number

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.variableInput"></a>

```java
public java.lang.Object getVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>>

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `routeTo`<sup>Required</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suppress"></a>

```java
public java.lang.Object getSuppress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceCatchAllActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

---


### EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference <a name="EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference;

new EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionIdInput"></a>

```java
public java.lang.String getActionIdInput();
```

- *Type:* java.lang.String

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationActionOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction">EventOrchestrationServiceCatchAllActionsPagerdutyAutomationAction</a>

---


### EventOrchestrationServiceCatchAllActionsVariableList <a name="EventOrchestrationServiceCatchAllActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsVariableList;

new EventOrchestrationServiceCatchAllActionsVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.get"></a>

```java
public EventOrchestrationServiceCatchAllActionsVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>>

---


### EventOrchestrationServiceCatchAllActionsVariableOutputReference <a name="EventOrchestrationServiceCatchAllActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllActionsVariableOutputReference;

new EventOrchestrationServiceCatchAllActionsVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsVariable">EventOrchestrationServiceCatchAllActionsVariable</a>

---


### EventOrchestrationServiceCatchAllOutputReference <a name="EventOrchestrationServiceCatchAllOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceCatchAllOutputReference;

new EventOrchestrationServiceCatchAllOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.putActions"></a>

```java
public void putActions(EventOrchestrationServiceCatchAllActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference">EventOrchestrationServiceCatchAllActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actions"></a>

```java
public EventOrchestrationServiceCatchAllActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActionsOutputReference">EventOrchestrationServiceCatchAllActionsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.actionsInput"></a>

```java
public EventOrchestrationServiceCatchAllActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllActions">EventOrchestrationServiceCatchAllActions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAllOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceCatchAll getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceCatchAll">EventOrchestrationServiceCatchAll</a>

---


### EventOrchestrationServiceSetList <a name="EventOrchestrationServiceSetList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetList;

new EventOrchestrationServiceSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.get"></a>

```java
public EventOrchestrationServiceSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>>

---


### EventOrchestrationServiceSetOutputReference <a name="EventOrchestrationServiceSetOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetOutputReference;

new EventOrchestrationServiceSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<EventOrchestrationServiceSetRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList">EventOrchestrationServiceSetRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.rule"></a>

```java
public EventOrchestrationServiceSetRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList">EventOrchestrationServiceSetRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSet">EventOrchestrationServiceSet</a>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList <a name="EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList;

new EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.get"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference <a name="EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference;

new EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference <a name="EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference;

new EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetAutoSend">resetAutoSend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<EventOrchestrationServiceSetRuleActionsAutomationActionHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>>

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable OR java.util.List<EventOrchestrationServiceSetRuleActionsAutomationActionParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>>

---

##### `resetAutoSend` <a name="resetAutoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetAutoSend"></a>

```java
public void resetAutoSend()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.resetParameter"></a>

```java
public void resetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList">EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList">EventOrchestrationServiceSetRuleActionsAutomationActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSendInput">autoSendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSend">autoSend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.header"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList">EventOrchestrationServiceSetRuleActionsAutomationActionHeaderList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameter"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationActionParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList">EventOrchestrationServiceSetRuleActionsAutomationActionParameterList</a>

---

##### `autoSendInput`<sup>Optional</sup> <a name="autoSendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSendInput"></a>

```java
public java.lang.Object getAutoSendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionHeader">EventOrchestrationServiceSetRuleActionsAutomationActionHeader</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.parameterInput"></a>

```java
public java.lang.Object getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `autoSend`<sup>Required</sup> <a name="autoSend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.autoSend"></a>

```java
public java.lang.Object getAutoSend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionParameterList <a name="EventOrchestrationServiceSetRuleActionsAutomationActionParameterList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList;

new EventOrchestrationServiceSetRuleActionsAutomationActionParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.get"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>>

---


### EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference <a name="EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference;

new EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionParameter">EventOrchestrationServiceSetRuleActionsAutomationActionParameter</a>

---


### EventOrchestrationServiceSetRuleActionsExtractionList <a name="EventOrchestrationServiceSetRuleActionsExtractionList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsExtractionList;

new EventOrchestrationServiceSetRuleActionsExtractionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.get"></a>

```java
public EventOrchestrationServiceSetRuleActionsExtractionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>>

---


### EventOrchestrationServiceSetRuleActionsExtractionOutputReference <a name="EventOrchestrationServiceSetRuleActionsExtractionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsExtractionOutputReference;

new EventOrchestrationServiceSetRuleActionsExtractionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.resetTemplate"></a>

```java
public void resetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.templateInput">templateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.template">template</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.templateInput"></a>

```java
public java.lang.String getTemplateInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.template"></a>

```java
public java.lang.String getTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>

---


### EventOrchestrationServiceSetRuleActionsOutputReference <a name="EventOrchestrationServiceSetRuleActionsOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsOutputReference;

new EventOrchestrationServiceSetRuleActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putAutomationAction">putAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putExtraction">putExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putPagerdutyAutomationAction">putPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putVariable">putVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAnnotate">resetAnnotate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAutomationAction">resetAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetEventAction">resetEventAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetExtraction">resetExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPagerdutyAutomationAction">resetPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetRouteTo">resetRouteTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuppress">resetSuppress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuspend">resetSuspend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetVariable">resetVariable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomationAction` <a name="putAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putAutomationAction"></a>

```java
public void putAutomationAction(EventOrchestrationServiceSetRuleActionsAutomationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

---

##### `putExtraction` <a name="putExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putExtraction"></a>

```java
public void putExtraction(IResolvable OR java.util.List<EventOrchestrationServiceSetRuleActionsExtraction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putExtraction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>>

---

##### `putPagerdutyAutomationAction` <a name="putPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putPagerdutyAutomationAction"></a>

```java
public void putPagerdutyAutomationAction(EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putPagerdutyAutomationAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

---

##### `putVariable` <a name="putVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putVariable"></a>

```java
public void putVariable(IResolvable OR java.util.List<EventOrchestrationServiceSetRuleActionsVariable> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.putVariable.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>>

---

##### `resetAnnotate` <a name="resetAnnotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAnnotate"></a>

```java
public void resetAnnotate()
```

##### `resetAutomationAction` <a name="resetAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetAutomationAction"></a>

```java
public void resetAutomationAction()
```

##### `resetEventAction` <a name="resetEventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetEventAction"></a>

```java
public void resetEventAction()
```

##### `resetExtraction` <a name="resetExtraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetExtraction"></a>

```java
public void resetExtraction()
```

##### `resetPagerdutyAutomationAction` <a name="resetPagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPagerdutyAutomationAction"></a>

```java
public void resetPagerdutyAutomationAction()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRouteTo` <a name="resetRouteTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetRouteTo"></a>

```java
public void resetRouteTo()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```

##### `resetSuppress` <a name="resetSuppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuppress"></a>

```java
public void resetSuppress()
```

##### `resetSuspend` <a name="resetSuspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetSuspend"></a>

```java
public void resetSuspend()
```

##### `resetVariable` <a name="resetVariable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.resetVariable"></a>

```java
public void resetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationAction">automationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extraction">extraction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList">EventOrchestrationServiceSetRuleActionsExtractionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationAction">pagerdutyAutomationAction</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variable">variable</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList">EventOrchestrationServiceSetRuleActionsVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotateInput">annotateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationActionInput">automationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventActionInput">eventActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extractionInput">extractionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationActionInput">pagerdutyAutomationActionInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeToInput">routeToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppressInput">suppressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspendInput">suspendInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variableInput">variableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotate">annotate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventAction">eventAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeTo">routeTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppress">suppress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspend">suspend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automationAction`<sup>Required</sup> <a name="automationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationAction"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference getAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsAutomationActionOutputReference</a>

---

##### `extraction`<sup>Required</sup> <a name="extraction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extraction"></a>

```java
public EventOrchestrationServiceSetRuleActionsExtractionList getExtraction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtractionList">EventOrchestrationServiceSetRuleActionsExtractionList</a>

---

##### `pagerdutyAutomationAction`<sup>Required</sup> <a name="pagerdutyAutomationAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationAction"></a>

```java
public EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference getPagerdutyAutomationAction();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference</a>

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variable"></a>

```java
public EventOrchestrationServiceSetRuleActionsVariableList getVariable();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList">EventOrchestrationServiceSetRuleActionsVariableList</a>

---

##### `annotateInput`<sup>Optional</sup> <a name="annotateInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotateInput"></a>

```java
public java.lang.String getAnnotateInput();
```

- *Type:* java.lang.String

---

##### `automationActionInput`<sup>Optional</sup> <a name="automationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.automationActionInput"></a>

```java
public EventOrchestrationServiceSetRuleActionsAutomationAction getAutomationActionInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsAutomationAction">EventOrchestrationServiceSetRuleActionsAutomationAction</a>

---

##### `eventActionInput`<sup>Optional</sup> <a name="eventActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventActionInput"></a>

```java
public java.lang.String getEventActionInput();
```

- *Type:* java.lang.String

---

##### `extractionInput`<sup>Optional</sup> <a name="extractionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.extractionInput"></a>

```java
public java.lang.Object getExtractionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsExtraction">EventOrchestrationServiceSetRuleActionsExtraction</a>>

---

##### `pagerdutyAutomationActionInput`<sup>Optional</sup> <a name="pagerdutyAutomationActionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.pagerdutyAutomationActionInput"></a>

```java
public EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction getPagerdutyAutomationActionInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `routeToInput`<sup>Optional</sup> <a name="routeToInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeToInput"></a>

```java
public java.lang.String getRouteToInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `suppressInput`<sup>Optional</sup> <a name="suppressInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppressInput"></a>

```java
public java.lang.Object getSuppressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspendInput`<sup>Optional</sup> <a name="suspendInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspendInput"></a>

```java
public java.lang.Number getSuspendInput();
```

- *Type:* java.lang.Number

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.variableInput"></a>

```java
public java.lang.Object getVariableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>>

---

##### `annotate`<sup>Required</sup> <a name="annotate" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.annotate"></a>

```java
public java.lang.String getAnnotate();
```

- *Type:* java.lang.String

---

##### `eventAction`<sup>Required</sup> <a name="eventAction" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.eventAction"></a>

```java
public java.lang.String getEventAction();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `routeTo`<sup>Required</sup> <a name="routeTo" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.routeTo"></a>

```java
public java.lang.String getRouteTo();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `suppress`<sup>Required</sup> <a name="suppress" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suppress"></a>

```java
public java.lang.Object getSuppress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.suspend"></a>

```java
public java.lang.Number getSuspend();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceSetRuleActions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

---


### EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference <a name="EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference;

new EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionIdInput">actionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionId">actionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionIdInput`<sup>Optional</sup> <a name="actionIdInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionIdInput"></a>

```java
public java.lang.String getActionIdInput();
```

- *Type:* java.lang.String

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.actionId"></a>

```java
public java.lang.String getActionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationActionOutputReference.property.internalValue"></a>

```java
public EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction">EventOrchestrationServiceSetRuleActionsPagerdutyAutomationAction</a>

---


### EventOrchestrationServiceSetRuleActionsVariableList <a name="EventOrchestrationServiceSetRuleActionsVariableList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsVariableList;

new EventOrchestrationServiceSetRuleActionsVariableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.get"></a>

```java
public EventOrchestrationServiceSetRuleActionsVariableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>>

---


### EventOrchestrationServiceSetRuleActionsVariableOutputReference <a name="EventOrchestrationServiceSetRuleActionsVariableOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleActionsVariableOutputReference;

new EventOrchestrationServiceSetRuleActionsVariableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsVariable">EventOrchestrationServiceSetRuleActionsVariable</a>

---


### EventOrchestrationServiceSetRuleConditionList <a name="EventOrchestrationServiceSetRuleConditionList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleConditionList;

new EventOrchestrationServiceSetRuleConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.get"></a>

```java
public EventOrchestrationServiceSetRuleConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>>

---


### EventOrchestrationServiceSetRuleConditionOutputReference <a name="EventOrchestrationServiceSetRuleConditionOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleConditionOutputReference;

new EventOrchestrationServiceSetRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>

---


### EventOrchestrationServiceSetRuleList <a name="EventOrchestrationServiceSetRuleList" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleList;

new EventOrchestrationServiceSetRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.get"></a>

```java
public EventOrchestrationServiceSetRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>>

---


### EventOrchestrationServiceSetRuleOutputReference <a name="EventOrchestrationServiceSetRuleOutputReference" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.event_orchestration_service.EventOrchestrationServiceSetRuleOutputReference;

new EventOrchestrationServiceSetRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putActions"></a>

```java
public void putActions(EventOrchestrationServiceSetRuleActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable OR java.util.List<EventOrchestrationServiceSetRuleCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference">EventOrchestrationServiceSetRuleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList">EventOrchestrationServiceSetRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actionsInput">actionsInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actions"></a>

```java
public EventOrchestrationServiceSetRuleActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActionsOutputReference">EventOrchestrationServiceSetRuleActionsOutputReference</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.condition"></a>

```java
public EventOrchestrationServiceSetRuleConditionList getCondition();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleConditionList">EventOrchestrationServiceSetRuleConditionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.actionsInput"></a>

```java
public EventOrchestrationServiceSetRuleActions getActionsInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleActions">EventOrchestrationServiceSetRuleActions</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.conditionInput"></a>

```java
public java.lang.Object getConditionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleCondition">EventOrchestrationServiceSetRuleCondition</a>>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-pagerduty.eventOrchestrationService.EventOrchestrationServiceSetRule">EventOrchestrationServiceSetRule</a>

---



