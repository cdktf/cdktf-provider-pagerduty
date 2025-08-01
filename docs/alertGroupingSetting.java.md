# `alertGroupingSetting` Submodule <a name="`alertGroupingSetting` Submodule" id="@cdktf/provider-pagerduty.alertGroupingSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertGroupingSetting <a name="AlertGroupingSetting" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting"></a>

Represents a {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting pagerduty_alert_grouping_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSetting;

AlertGroupingSetting.Builder.create(Construct scope, java.lang.String id)
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
    .services(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .config(AlertGroupingSettingConfigA)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.services">services</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}.

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.services"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#config AlertGroupingSetting#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig"></a>

```java
public void putConfig(AlertGroupingSettingConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSetting;

AlertGroupingSetting.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSetting;

AlertGroupingSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSetting;

AlertGroupingSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSetting;

AlertGroupingSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlertGroupingSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AlertGroupingSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlertGroupingSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlertGroupingSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AlertGroupingSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference">AlertGroupingSettingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.config"></a>

```java
public AlertGroupingSettingConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference">AlertGroupingSettingConfigAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.configInput"></a>

```java
public java.lang.Object getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a> OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertGroupingSettingConfig <a name="AlertGroupingSettingConfig" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSettingConfig;

AlertGroupingSettingConfig.builder()
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
    .services(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .config(AlertGroupingSettingConfigA)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#name AlertGroupingSetting#name}.

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#services AlertGroupingSetting#services}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#type AlertGroupingSetting#type}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.config"></a>

```java
public AlertGroupingSettingConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#config AlertGroupingSetting#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#description AlertGroupingSetting#description}.

---

### AlertGroupingSettingConfigA <a name="AlertGroupingSettingConfigA" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSettingConfigA;

AlertGroupingSettingConfigA.builder()
//  .aggregate(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .timeout(java.lang.Number)
//  .timeWindow(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.aggregate">aggregate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}. |

---

##### `aggregate`<sup>Optional</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.aggregate"></a>

```java
public java.lang.String getAggregate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#aggregate AlertGroupingSetting#aggregate}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#fields AlertGroupingSetting#fields}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#timeout AlertGroupingSetting#timeout}.

---

##### `timeWindow`<sup>Optional</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA.property.timeWindow"></a>

```java
public java.lang.Number getTimeWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pagerduty/pagerduty/3.27.3/docs/resources/alert_grouping_setting#time_window AlertGroupingSetting#time_window}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertGroupingSettingConfigAOutputReference <a name="AlertGroupingSettingConfigAOutputReference" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.pagerduty.alert_grouping_setting.AlertGroupingSettingConfigAOutputReference;

new AlertGroupingSettingConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetAggregate">resetAggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeWindow">resetTimeWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregate` <a name="resetAggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetAggregate"></a>

```java
public void resetAggregate()
```

##### `resetFields` <a name="resetFields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeWindow` <a name="resetTimeWindow" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.resetTimeWindow"></a>

```java
public void resetTimeWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregateInput">aggregateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregate">aggregate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindow">timeWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregateInput`<sup>Optional</sup> <a name="aggregateInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregateInput"></a>

```java
public java.lang.String getAggregateInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindowInput"></a>

```java
public java.lang.Number getTimeWindowInput();
```

- *Type:* java.lang.Number

---

##### `aggregate`<sup>Required</sup> <a name="aggregate" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.aggregate"></a>

```java
public java.lang.String getAggregate();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.timeWindow"></a>

```java
public java.lang.Number getTimeWindow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigAOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-pagerduty.alertGroupingSetting.AlertGroupingSettingConfigA">AlertGroupingSettingConfigA</a> OR com.hashicorp.cdktf.IResolvable

---



